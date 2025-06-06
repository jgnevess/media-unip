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
    text-align: center;
`;

export const Txt = styled.Text`
    color: ${props => props.theme.primary};
    margin-top: 15px;
    font-weight: bold;
    width: 100%;
    margin-start: 15%;
`;

export const Input = styled.TextInput`
    color: ${props => props.theme.primary};
    font-size: 16px;
    border: 1px solid ${props => props.theme.border};
    width: 90%;
    margin-top: 10px;
    border-radius: 5px;
    padding: 10px;
`;

export const Btn = styled.Pressable`
    background-color: ${props => props.theme.btnPrimary};
    border-width: 1px;
    border-color: ${props => props.theme.btnPrimary};
    width: 90%;
    margin-top: 20px;
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

export const Close = styled.Text`
    color: ${props => props.theme.secondary};
    font-size: 10px;
    padding: 16px;
    text-align: center;
`;

export const ModalOverlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.modalOverlay || 'rgba(0, 0, 0, 0.7)'};
  justify-content: center;
  align-items: center;
`;

export const ModalResponse = styled.View`
  background: ${props => props.theme.backgroundModal};
  width: 80%;
  min-height: 30%;
  border-radius: 20px;
  padding: 20px;
  align-items: center;
  justify-content: space-around;
`;

export const CloseButton = styled.Pressable`
    z-index: 999;
    margin-bottom: -15%;
    margin-start: 62%;
    border: 1px solid ${props => props.theme.secondary};
    color: ${props => props.theme.secondary};
    border-radius: 10px;
`;