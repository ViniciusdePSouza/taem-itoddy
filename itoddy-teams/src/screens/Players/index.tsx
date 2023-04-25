import React, { useEffect, useState, useRef } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

import { Header } from "../../Components/Header";
import { ButtonIcon } from "../../Components/ButtonIcon";
import { Highlight } from "../../Components/Highlight";
import { Input } from "../../Components/TextInput";
import { Filter } from "../../Components/Filter";
import { PlayerCard } from "../../Components/PlayerCard";
import { EmptyList } from "../../Components/EmptyList";
import { Button } from "../../Components/Button";

import { Alert, FlatList, Keyboard } from "react-native";

import { AppError } from "@utils/AppError";

import { PLyerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { addPlayerByGroup } from "@storage/player/addPlayerBYGroup";
import { getPlayerByGroupAndTeam } from "@storage/player/getPlayerByGroupAndTeam";

import { TextInput } from "react-native";
import { removePlayerByGroup } from "@storage/player/removePlayerByGroup";
import { removeGroupByName } from "@storage/group/removeGroupByName";
import { NewGroup } from "@screens/NewGroup";

type RouteParams = {
  group: string;
};

export function Players() {
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState<PLyerStorageDTO[]>([]);
  const [newPlayerName, setNewPlayerName] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true)

  const route = useRoute();
  const { group } = route.params as RouteParams;

  const newPlayerNameInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert(
        "Novo Jogador",
        "Informe o nome do jogador que você quer adicionar no time"
      );
    }

    const newPlayer: PLyerStorageDTO = {
      name: newPlayerName,
      team,
    };

    try {
      await addPlayerByGroup(newPlayer, group);

      newPlayerNameInputRef.current?.blur();

      fetchPlayersByTeam();
      setNewPlayerName("");
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo Jogador", error.message);
      } else {
        console.log(error);
        Alert.alert(
          "Novo Jogador",
          "Erro ao adicionar o novo jogador, tente novamente mais tarde"
        );
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      setIsLoading(true)
      const playersByTeam = await getPlayerByGroupAndTeam(group, team);
      setPlayers(playersByTeam);
    } catch (error) {
      console.log(error);
      Alert.alert("Novo Jogador", "Não foi possível adicionar o novo jogador");
    } finally {
      setIsLoading(false)
    }
  }

  async function handleRemovePlayer(playerName: string) {
    try {
      await removePlayerByGroup(playerName, group);
      fetchPlayersByTeam();
    } catch (err) {
      console.log(err);
      Alert.alert(
        "Novo Jogador",
        "Não foi possível remover o jogador selecionado"
      );
    }
  }

  async function removeGroup() {
    try {
      await removeGroupByName(group);
      navigation.navigate("groups");
    } catch (error) {
      console.log(error);
      Alert.alert("Remover grupo", "Não foi possível remover o grupo");
    }
  }

  async function handleRemoveGroup() {
    Alert.alert("Remover", "Deseja raelmente remover esse grupo?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => removeGroup() },
    ]);
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  return (
    <Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="Adicione a galera e separe os times" />

      <Form>
        <Input
          inputRef={newPlayerNameInputRef}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />

        <ButtonIcon icon="add" type="PRIMARY" onPress={handleAddPlayer} />
      </Form>

      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          horizontal={true}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)} />
          )}
        />

        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard
            name={item.name}
            onRemove={() => handleRemovePlayer(item.name)}
          />
        )}
        ListEmptyComponent={() => (
          <EmptyList message="Ainda não há membros no time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />

      <Button type="SECONDARY" title="Remover Turma" onPress={handleRemoveGroup}/>
    </Container>
  );
}
