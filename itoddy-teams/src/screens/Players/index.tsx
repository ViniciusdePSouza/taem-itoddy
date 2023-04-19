import React from "react";

import { Container, Form } from "./styles";

import { Header } from "../../Components/Header";
import { ButtonIcon } from "../../Components/ButtonIcon";
import { Highlight } from "../../Components/Highlight";
import { TextInput } from "../../Components/TextInput";
import { Filter } from "../../Components/Filter";

export function Players() {
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

      <Filter title="Time A"/>
    </Container>
  );
}
