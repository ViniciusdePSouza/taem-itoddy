import React, { useState } from "react";

import { Container, Content, Icon } from "./styles";

import { Text } from "react-native";
import { Header } from "../../Components/Header";
import { Highlight } from "../../Components/Highlight";
import { Button } from "../../Components/Button";
import { TextInput } from "../../Components/TextInput";
import { useNavigation } from "@react-navigation/native";

export function NewGroup(){
    const [groupName, setGroupName] = useState<string>('')
    const navigate = useNavigation()

    function handleNewGroup() {
        navigate.navigate('players', { group: groupName  })
    }

    return (
        <Container>
            <Header showBackButton/>
            <Content>
                <Icon />
                <Highlight title='Nova Turma' subtitle="crie a turma para adicionar pessoas "/>
                <TextInput placeholder="Qual o nome da nova equipe ?" onChangeText={setGroupName}/>
                <Button title="Criar" onPress={handleNewGroup} />
            </Content>
        </Container>
    )
}