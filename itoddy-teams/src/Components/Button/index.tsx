import React from "react";
import { Container, ButtonStyleProps, Title } from "./styles";

type TouchableOpacityProps = {
  title: string;
  type?: ButtonStyleProps;
};

export function Button({
  title,
  type = "PRIMARY",
  ...rest
}: TouchableOpacityProps) {
  return (
    <Container {...rest} type={type}>
      <Title>{title}</Title>
    </Container>
  );
}
