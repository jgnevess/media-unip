import styled from "styled-components/native";

export const Wrapper = styled.View`
    background: ${props => props.theme.background};
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    color: ${props => props.theme.primary};
    font-size: 24px;
`;


export const SubTitle = styled.Text`
    color: ${props => props.theme.secondary};
    font-size: 16px;
    padding: 16px;
`;

export const Txt = styled.Text`
    color: ${props => props.theme.secondary};
    margin-top: 15px;
`;

export const Input = styled.TextInput`
    color: ${props => props.theme.primary};
    font-size: 16px;
    border: 1px solid ${props => props.theme.border};
    width: 75%;
    margin-top: 10px;
    border-radius: 5px
`;

export const Btn = styled.Pressable`
    background-color: ${props => props.theme.btnPrimary};
    border-width: 1px;
    border-color: ${props => props.theme.btnPrimary};
    width: 75%;
    margin-top: 10px;
    padding: 10px;
    align-items: center;
    border-radius: 5px
`;

export const Media = styled.Text`
    color: ${props => props.theme.secondary};
    font-size: 24px;
    padding: 16px;
    text-align: center;
`;