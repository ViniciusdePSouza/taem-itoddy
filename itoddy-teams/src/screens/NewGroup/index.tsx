import React, { useState } from "react";

import { Container, Content, Icon } from "./styles";

import { Alert, Text } from "react-native";
import { Header } from "../../Components/Header";
import { Highlight } from "../../Components/Highlight";
import { Button } from "../../Components/Button";
import { TextInput } from "../../Components/TextInput";
import { useNavigation } from "@react-navigation/native";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";

export function NewGroup() {
  const [groupName, setGroupName] = useState<string>("");
  const navigate = useNavigation();

  async function handleNewGroup() {
    try {
      if(groupName.trim().length === 0) {
        return Alert.alert('Novo Grupo', 'Informe o nome do grupo')
      }

      await groupCreate(groupName);
      navigate.navigate("players", { group: groupName });
    } catch (error) {
      if(error instanceof AppError) {
        Alert.alert('Novo Grupo', error.message);
      } else {
        Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo');
        console.log(error);
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova Turma"
          subtitle="crie a turma para adicionar pessoas "
        />
        <TextInput
          placeholder="Qual o nome da nova equipe ?"
          onChangeText={setGroupName}
        />
        <Button title="Criar" onPress={handleNewGroup} />
      </Content>
    </Container>
  );
}
