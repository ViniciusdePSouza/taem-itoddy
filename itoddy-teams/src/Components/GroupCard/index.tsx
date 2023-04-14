import React from "react";
import { Container, Icon, Title } from "./styled";
import { TouchableOpacityProps } from "react-native";

type GroupCardProps = TouchableOpacityProps & {
    title: string
}

export function GroupCard({ title, ...rest }: GroupCardProps) {
    return (
        <Container {...rest}>
            <Icon/>
            <Title>{title}</Title>
        </Container>
    )
}