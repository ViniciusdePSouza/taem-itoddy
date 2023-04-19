import React from "react";
import { Container, FilterStyleProps, Title } from "./styled";
import { TouchableOpacity } from "react-native";

type FilterProps = TouchableOpacity & FilterStyleProps & {
    title: string
}

export function Filter({title, isActive = false, ...rest}: FilterProps){
    return (
        <Container isActive={isActive} {...rest}>
            <Title>{title}</Title>
        </Container>
    )
}