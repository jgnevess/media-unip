export type AverageCalc = {
    np1: string
    np2: string
    pim: string
    exame: string
}

export type Response = {
    msg: string
    status: string
    styled: Style
}

export type Style = {
    color: string
    fontSize: number
}

export function handleChange(inputText: string): string {
    let note = parseFloat(inputText);
    const regex = /^(10(\.0)?|[0-9](\.[0-9])?|[0-9]\.[0-9]?)?$/;
    if (regex.test(inputText)) {
        if (note < 0 || note > 10 && note.toFixed(1)) {
            return ''
        }
        else {
            return inputText
        }
    }
    return '';
}

export const araverageCalc = ({ np1, np2, pim, exame }: AverageCalc) : Response => {
    if (np1 !== '' && np2 !== '') {

        if (pim == '') {
            const average = (Number.parseFloat(np1) * 4 + Number.parseFloat(np2) * 4) / 10;
            if (average >= 7) {
                return {msg : `Você está com ${average.toFixed(1)}`, status: 'Aprovado 😝', styled : {color: '#4CAF50', fontSize: 24 }}
            }
            else {
                const notepim = (7 - average) / 0.20;
                return {msg : `Você está com ${average.toFixed(1)} e precisa tirar note ${notepim.toFixed(1)} no pim`, status: 'Aguardando Pim 🧐', styled : {color: '#FFD600', fontSize: 24 }}
            }
        }
        else if (exame == '') {
            const average = (
                Number.parseFloat(np1) * 4
                + Number.parseFloat(np2) * 4
                + Number.parseFloat(pim) * 2
            ) / 10;

            const mf1 = round(average);

            if (average < 7) {
                if (mf1 < 7) {
                    const mf = (10 - average);
                    return {msg : `Você está com ${average.toFixed(1)} e precisa tirar nota ${mf.toFixed(1)} no exame`, status: 'Exame 😰', styled : {color: '#FFD600', fontSize: 24 }}
                }
                else {
                    return {msg : `Você está com ${average.toFixed(1)} e sua nota arredondou para ${mf1}`, status: 'Aprovado 😝', styled : {color: '#4CAF50', fontSize: 24 }}
                }
            } else {
                return {msg : `Você está com ${average.toFixed(1)}`, status: 'Aprovado 😝', styled : {color: '#4CAF50', fontSize: 24 }}
            }

        }
        else {
            const average = (
                Number.parseFloat(np1) * 4
                + Number.parseFloat(np2) * 4
                + Number.parseFloat(pim) * 2
            ) / 10;
            const mf2 = (Number.parseFloat(exame) + average) / 2;
            const mf3 = round(mf2);
            if (mf2 >= 5) {
                return {msg : `Você está com ${mf2.toFixed(1)}`, status: 'Aprovado 😝', styled : {color: '#4CAF50', fontSize: 24 }}
            }
            else if (mf3 >= 5) {
                return {msg : `Você está com ${mf2.toFixed(1)} e sua nota arredondou para ${mf3}`, status: 'Aprovado 😝', styled : {color: '#4CAF50', fontSize: 24 }}
            } else {
                return {msg : `Você está de DP`, status: 'Reprovado 😞', styled : {color: '#FF5252', fontSize: 24 }}
            }
        }
    } else {
        return {msg : "Insira os valores da np1 e np2", status: 'Erro ✋', styled : {color: '#FF5252', fontSize: 24 }}
    }
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