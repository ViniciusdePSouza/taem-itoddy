import React from "react";
import { ButtonIconTypeStyleProps, Container, Icon } from "./styles";
import { TouchableOpacityProps } from "react-native";

import { MaterialIcons } from '@expo/vector-icons'

type ButtonIconProps = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap
    type?: ButtonIconTypeStyleProps
}

export function ButtonIcon({ icon, type = 'PRIMARY', ...rest}: ButtonIconProps ){
    return (
        <Container>
            <Icon name={icon} type={type}/>
        </Container>
    )
}