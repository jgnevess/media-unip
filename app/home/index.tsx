import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Btn, Close, CloseButton, Input, Media, ModalOverlay, SubTitle, Title, Txt, Wrapper } from './styles';
import { useState } from 'react';
import { calcularMedia, handleChange, Style } from './functions';
import Modal from '../components';

const Home = () => {

    const [np1, setNp1] = useState('')
    const [np2, setNp2] = useState('')
    const [pim, setPim] = useState('')
    const [exame, setExame] = useState('')
    const [msg, setMsg] = useState('')
    const [status, setStatus] = useState('')
    const [styled, setStyled] = useState<Style>()
    const [response, setResponse] = useState(false)

    const handleChangeNp1 = (entrada: string) => {
        const res = handleChange(entrada);
        setNp1(res);
    }

    const handleChangeNp2 = (entrada: string) => {
        const res = handleChange(entrada);
        setNp2(res);
    }

    const handleChangePim = (entrada: string) => {
        const res = handleChange(entrada);
        setPim(res);
    }

    const handleChangeExame = (entrada: string) => {
        const res = handleChange(entrada);
        setExame(res);
    }

    const handleClean = () => {
        setExame('')
        setMsg('')
        setNp1('')
        setNp2('')
        setPim('')
        setStatus('')
    }

    const handleCalcMedia = () => {
        const res = calcularMedia({ np1, np2, pim, exame });
        setMsg(res.msg)
        setStatus(res.status)
        setStyled(res.styled)
        setResponse(!response)
    }

    const handleModal = () => {
        setResponse(false);
    }

    if (response) {
        return (
            <ModalOverlay>
                <CloseButton onPress={handleModal}><Close>❌</Close></CloseButton>
                <Modal msg={msg} status={status} styled={styled!} />
            </ModalOverlay>
        )
    }

    return (
        <Wrapper>
            <Title>🎓 Média Unip</Title>
            <SubTitle>Insira suas notas nos campos abaixo e clique em calcular média</SubTitle>
            <Txt>NP1</Txt>
            <Input
                placeholder='Insira sua nota'
                placeholderTextColor='#ADB5BD'
                value={np1}
                keyboardType='numeric'
                onChangeText={handleChangeNp1} />
            <Txt>NP2</Txt>
            <Input
                placeholder='Insira sua nota'
                placeholderTextColor='#ADB5BD'
                value={np2}
                keyboardType='numeric'
                onChangeText={handleChangeNp2} />
            <Txt>PIM</Txt>
            <Input
                placeholder='Insira sua nota'
                placeholderTextColor='#ADB5BD'
                value={pim}
                keyboardType='numeric'
                onChangeText={handleChangePim} />
            <Txt>Exame</Txt>
            <Input
                placeholder='Insira sua nota'
                placeholderTextColor='#ADB5BD'
                value={exame}
                keyboardType='numeric'
                onChangeText={handleChangeExame} />
            <Btn onPress={handleCalcMedia}><Text style={styles.txt}>Calcular Média ⚡</Text></Btn>
            <Btn onPress={handleClean}><Text style={styles.txt}>Limpar campos 🧹</Text></Btn>
        </Wrapper>
    );
}

const styles = StyleSheet.create({
    txt: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default Home;