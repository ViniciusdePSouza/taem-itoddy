import React, { useCallback, useState } from "react";

import { Container } from "./styles";

import { Header } from "../../Components/Header";
import { Highlight } from "../../Components/Highlight";
import { GroupCard } from "../../Components/GroupCard";
import { FlatList } from "react-native";
import { EmptyList } from "../../Components/EmptyList";
import { Button } from "../../Components/Button";

import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { getAllGroups } from "@storage/group/getAllGroups";
import { Loading } from "../../Components/Loading";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true)

  const navigation = useNavigation();

  async function handleOpenGroup(group: string) {
    navigation.navigate('players', { group })
  }

  async function fetchGroups() {
    try {
      setIsLoading(true)
      const data = await getAllGroups();
      setGroups(data);
    } catch (err) {
      console.log(err);
    } finally{
      setIsLoading(false)
    }
  }

  function handleNewGroup() {
    navigation.navigate("new");
  }

  useFocusEffect(useCallback(() => {
    fetchGroups()
  }, []))

  return (
    <Container>
      <Header showBackButton />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      { isLoading ? <Loading/> :
        <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} onPress={() => handleOpenGroup(item)}/>}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <EmptyList message="Ainda não há grupos criados" />
        )}
      />
      }

      <Button title="Criar Turma" onPress={handleNewGroup} />
    </Container>
  );
}
