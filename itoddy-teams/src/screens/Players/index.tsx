import React, { useState } from "react";

import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";

import { Header } from "../../Components/Header";
import { ButtonIcon } from "../../Components/ButtonIcon";
import { Highlight } from "../../Components/Highlight";
import { TextInput } from "../../Components/TextInput";
import { Filter } from "../../Components/Filter";
import { PlayerCard } from "../../Components/PlayerCard";
import { EmptyList } from "../../Components/EmptyList";
import { Button } from "../../Components/Button";

import { FlatList } from "react-native";

export function Players() {
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState(['Rodrigo', 'Vini']);

  function removePlayer() {
    console.log('alo')
  }

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />

      <Form>
        <TextInput placeholder="Nome da pessoa" autoCorrect={false} />

        <ButtonIcon icon="add" type="PRIMARY" />
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
              onPress={() => setTeam(item)}
            />
          )}
        />

        <NumbersOfPlayers>{players.length}</NumbersOfPlayers>
      </HeaderList>

      <FlatList
      data={players}
      keyExtractor={item => item} 
      renderItem={({item}) => (
        <PlayerCard name={item} onRemove={() => {removePlayer}}/>
      )}
      ListEmptyComponent={() => <EmptyList message="Ainda não há membros no time"/>}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[
        { paddingBottom: 100 },
        players.length === 0 && { flex: 1}
      ]}
      />

      <Button type="SECONDARY" title="Remver Turma"/>
    </Container>
  );
}
