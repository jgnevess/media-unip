import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Btn, Close, CloseButton, Input, Media, ModalOverlay, SubTitle, Title, Txt, Wrapper } from './styles';
import { useState } from 'react';
import { araverageCalc, handleChange, Style } from './functions';
import Modal from '../components/modal';
import InputComponent from '../components/input';

const Home = () => {

    const [np1, setNp1] = useState('')
    const [np2, setNp2] = useState('')
    const [pim, setPim] = useState('')
    const [exame, setExame] = useState('')
    const [msg, setMsg] = useState('')
    const [status, setStatus] = useState('')
    const [styled, setStyled] = useState<Style>()
    const [response, setResponse] = useState(false)

    const handleChangeNp1 = (inputText: string) => {
        const res = handleChange(inputText);
        setNp1(res);
    }

    const handleChangeNp2 = (inputText: string) => {
        const res = handleChange(inputText);
        setNp2(res);
    }

    const handleChangePim = (inputText: string) => {
        const res = handleChange(inputText);
        setPim(res);
    }

    const handleChangeExame = (inputText: string) => {
        const res = handleChange(inputText);
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
        const res = araverageCalc({ np1, np2, pim, exame });
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
            <InputComponent 
                onChangeText={handleChangeNp1}
                placeholder='Insira sua nota'
                placeholderTextColor='#ADB5BD'
                value={np1}
                txt='Np1'
            />
            <InputComponent 
                onChangeText={handleChangeNp2}
                placeholder='Insira sua nota'
                placeholderTextColor='#ADB5BD'
                value={np2}
                txt='Np2'
            />
            <InputComponent 
                onChangeText={handleChangePim}
                placeholder='Insira sua nota'
                placeholderTextColor='#ADB5BD'
                value={pim}
                txt='PIM'
            />
            <InputComponent 
                onChangeText={handleChangeExame}
                placeholder='Insira sua nota'
                placeholderTextColor='#ADB5BD'
                value={exame}
                txt='Exame'
            />
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