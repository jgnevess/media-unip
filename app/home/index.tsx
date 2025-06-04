import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Btn, Input, Media, SubTitle, Title, Txt, Wrapper } from './styles';
import { useState } from 'react';

const Home = () => {

    const [np1, setNp1] = useState('')
    const [np2, setNp2] = useState('')
    const [pim, setPim] = useState('')
    const [exame, setExame] = useState('')
    const [media, setMedia] = useState(0)
    const [msg, setMsg] = useState('')

    const handleChangeNp1 = (entrada: string) => {
        let nota = parseFloat(entrada);
        const regex = /^(10(\.0)?|[0-9](\.[0-9])?|[0-9]\.[0-9]?)?$/;
        if (regex.test(entrada)) {
            if (nota < 0 || nota > 10 && nota.toFixed(1)) {
                setNp1('');
            }
            else {
                setNp1(entrada);
            }
        }
    }

    const handleChangeNp2 = (entrada: string) => {
        let nota = parseFloat(entrada);
        const regex = /^(10(\.0)?|[0-9](\.[0-9])?|[0-9]\.[0-9]?)?$/;
        if (regex.test(entrada)) {
            if (nota < 0 || nota > 10 && nota.toFixed(1)) {
                setNp2('');
            }
            else {
                setNp2(entrada);
            }
        }
    }

    const handleChangePim = (entrada: string) => {
        let nota = parseFloat(entrada);
        const regex = /^(10(\.0)?|[0-9](\.[0-9])?|[0-9]\.[0-9]?)?$/;
        if (regex.test(entrada)) {
            if (nota < 0 || nota > 10 && nota.toFixed(1)) {
                setPim('');
            }
            else {
                setPim(entrada);
            }
        }
    }

    const handleChangeExame = (entrada: string) => {
        let nota = parseFloat(entrada);
        const regex = /^(10(\.0)?|[0-9](\.[0-9])?|[0-9]\.[0-9]?)?$/;
        if (regex.test(entrada)) {
            if (nota < 0 || nota > 10 && nota.toFixed(1)) {
                setExame('');
            }
            else {
                setExame(entrada);
            }
        }
    }

    const calcularMedia = () => {
        if (np1 !== '' && np2 !== '') {

            // calcular quanto precisa no pim
            if (pim == '') {
                const media = (Number.parseFloat(np1) * 4 + Number.parseFloat(np2) * 4) / 10;
                setMedia(media);
                if (media >= 7) {
                    setMsg(`Você está com ${media} e foi aprovado`)
                }
                else {
                    const notapim = (7 - media) / 0.20;
                    setMsg(`Você está com ${media} e precisa tirar nota ${notapim.toFixed(1)} no pim`)
                }
            }

            else if (exame == '') {

                const media = (
                    Number.parseFloat(np1) * 4
                    + Number.parseFloat(np2) * 4
                    + Number.parseFloat(pim) * 2
                ) / 10;

                const mf1 = round(media);
                setMedia(mf1);

                if (media < 7) {
                    if (mf1 < 7) {
                        const mf = (10 - media);
                        setMsg(`Você está com ${media} e precisa tirar nota ${mf.toFixed(1)} no exame`)
                    }
                    else {
                        setMsg(`Você está com ${media} e a nota arredondou para ${mf1}, você foi aprovado`)
                    }
                } else {
                    setMsg(`Você está com ${media} e foi aprovado`)
                }

            }
            else {
                const media = (
                    Number.parseFloat(np1) * 4
                    + Number.parseFloat(np2) * 4
                    + Number.parseFloat(pim) * 2
                ) / 10;
                const mf2 = (Number.parseFloat(exame) + media) / 2;
                const mf3 = round(mf2);
                if (mf2 >= 5) {
                    setMsg(`Você está com ${mf2} e foi aprovado`)
                }
                else if (mf3 >= 5) {
                    console.log(mf2);
                    setMsg(`Você está com ${mf2} e sua nota arredondou para ${mf3}, você foi aprovado`)
                } else {
                    setMsg(`Você está de DP`)
                }
            }
        } else {
            setMsg("Insira os valores da np1 e np2")
        }
    }

    const handleClean = () => {
        setExame('')
        setMsg('')
        setNp1('')
        setNp2('')
        setPim('')
        setMedia(0)
    }

    function round(num: number) {
        const integerPart = Math.floor(num);
        const decimalPart = num - integerPart;

        if (decimalPart >= 0.7) {
            return Math.ceil(num);
        } else if (decimalPart >= 0.5) {
            return integerPart + 0.5;
        } else {
            return integerPart;
        }
    }

    return (
        <Wrapper>
            <Title>Média</Title>
            <SubTitle>Vamos calcular a média das notas</SubTitle>
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
            <Btn onPress={calcularMedia}><Text style={style.txt}>Calcular Média</Text></Btn>
            <Btn onPress={handleClean}><Text style={style.txt}>Limpar campos</Text></Btn>
            <Media>{msg}</Media>
        </Wrapper>
    );
}

const style = StyleSheet.create({
    txt: {
        color: '#FFF',
        fontWeight: 'bold'
    }
})

export default Home;