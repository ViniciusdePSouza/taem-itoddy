import React from "react";
import { Container, Icon, Name } from "./styles";
import { ButtonIcon } from "../ButtonIcon";

type PlayerCardProps = {
  name: string;
};

export function PlayerCard({ name }: PlayerCardProps) {
  return (
    <Container>
      <Icon name="person" />

      <Name>{name}</Name>

      <ButtonIcon icon="close" type="SECONDARY" />
    </Container>
  );
}
