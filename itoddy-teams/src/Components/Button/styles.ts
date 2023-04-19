import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
    type: ButtonStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
    flex : 1;

    max-height: 56px;

    background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.YELLOW_700 : theme.COLORS.RED_DARK};

    border-radius: 6px;

    justify-content: center;
    align-items: center;

    margin-bottom: 20px;
`

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family:  ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.WHITE}
`