import React, { useState } from "react";

import { Container } from "./styles";

import { Header } from "../../Components/Header";
import { Highlight } from "../../Components/Highlight";
import { GroupCard } from "../../Components/GroupCard";
import { FlatList } from "react-native";
import { EmptyList } from "../../Components/EmptyList";
import { Button } from "../../Components/Button";

import { useNavigation } from "@react-navigation/native";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation()

  function handleNewGroup() {
   navigation.navigate('new')
  }

  return (
    <Container>
      <Header showBackButton />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => <EmptyList message="Ainda não há grupos criados"/>}
      />

      <Button title='Criar Turma' onPress={handleNewGroup}/>
    </Container>
  );
}
