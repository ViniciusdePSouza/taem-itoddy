import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    padding: 24px;
    align-items: center;
    justify-content: center;
`

export const TextMain = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 24px
`