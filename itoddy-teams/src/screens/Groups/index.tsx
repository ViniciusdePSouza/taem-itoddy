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

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  async function fetchGroups() {
    try {
      const data = await getAllGroups();
      setGroups(data);
    } catch (err) {
      console.log(err);
    }
  }

  function handleNewGroup() {
    navigation.navigate("new");
  }

  useFocusEffect(useCallback(() => {
    console.log('useFocusEffect executou')
    fetchGroups()
  }, []))

  return (
    <Container>
      <Header showBackButton />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <EmptyList message="Ainda não há grupos criados" />
        )}
      />

      <Button title="Criar Turma" onPress={handleNewGroup} />
    </Container>
  );
}
