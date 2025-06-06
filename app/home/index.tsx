import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Btn, CloseButton, Input, Media, SubTitle, Title, Txt, Wrapper } from './styles';
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
            <Wrapper>
                <CloseButton onPress={handleModal}><Media>❌</Media></CloseButton>
                <Modal msg={msg} status={status} styled={styled!} />
            </Wrapper>
        )
    }

    return (
        <Wrapper>
            <Title>Média Unip</Title>
            <SubTitle>Insira suas notas nos campos abaixo e clique em calcular nota</SubTitle>
            <Txt>Insira a nota da NP1</Txt>
            <Input
                value={np1}
                keyboardType='numeric'
                onChangeText={handleChangeNp1} />
            <Txt>Insira a nota da NP2</Txt>
            <Input
                value={np2}
                keyboardType='numeric'
                onChangeText={handleChangeNp2} />
            <Txt>Insira a nota da PIM</Txt>
            <Input
                value={pim}
                keyboardType='numeric'
                onChangeText={handleChangePim} />
            <Txt>Insira a nota do Exame</Txt>
            <Input
                value={exame}
                keyboardType='numeric'
                onChangeText={handleChangeExame} />
            <Btn onPress={handleCalcMedia}><Text style={styles.txt}>Calcular Média 🧮</Text></Btn>
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