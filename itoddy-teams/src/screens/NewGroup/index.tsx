import React from "react";
import { Container, Content, Icon } from "./styles";
import { Text } from "react-native";
import { Header } from "../../Components/Header";
import { Highlight } from "../../Components/Highlight";
import { Button } from "../../Components/Button";
import { TextInput } from "../../Components/TextInput";

export function NewGroup(){
    return (
        <Container>
            <Header showBackButton/>
            <Content>
                <Icon />
                <Highlight title='Nova Turma' subtitle="crie a turma para adicionar pessoas " />
                <TextInput placeholder="Qual o nome da nova equipe ?" />
                <Button title="Criar" />
            </Content>
        </Container>
    )
}