export type MediaCalc = {
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

export function handleChange(entrada: string): string {
    let nota = parseFloat(entrada);
    const regex = /^(10(\.0)?|[0-9](\.[0-9])?|[0-9]\.[0-9]?)?$/;
    if (regex.test(entrada)) {
        if (nota < 0 || nota > 10 && nota.toFixed(1)) {
            return ''
        }
        else {
            return entrada
        }
    }
    return '';
}

export const calcularMedia = ({ np1, np2, pim, exame }: MediaCalc) : Response => {
    if (np1 !== '' && np2 !== '') {

        if (pim == '') {
            const media = (Number.parseFloat(np1) * 4 + Number.parseFloat(np2) * 4) / 10;
            if (media >= 7) {
                return {msg : `Você está com ${media.toFixed(1)}`, status: 'Aprovado', styled : {color: '#198754', fontSize: 36 }}
            }
            else {
                const notapim = (7 - media) / 0.20;
                return {msg : `Você está com ${media.toFixed(1)} e precisa tirar nota ${notapim.toFixed(1)} no pim`, status: 'Aguardando Pim', styled : {color: '#ffc107', fontSize: 36 }}
            }
        }
        else if (exame == '') {
            const media = (
                Number.parseFloat(np1) * 4
                + Number.parseFloat(np2) * 4
                + Number.parseFloat(pim) * 2
            ) / 10;

            const mf1 = round(media);

            if (media < 7) {
                if (mf1 < 7) {
                    const mf = (10 - media);
                    return {msg : `Você está com ${media.toFixed(1)} e precisa tirar nota ${mf.toFixed(1)} no exame`, status: 'Exame', styled : {color: '#ffc107', fontSize: 36 }}
                }
                else {
                    return {msg : `Você está com ${media.toFixed(1)} e a nota arredondou para ${mf1}`, status: 'Aprovado', styled : {color: '#198754', fontSize: 36 }}
                }
            } else {
                return {msg : `Você está com ${media.toFixed(1)}`, status: 'Aprovado', styled : {color: '#198754', fontSize: 36 }}
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
                return {msg : `Você está com ${mf2.toFixed(1)}`, status: 'Aprovado', styled : {color: '#198754', fontSize: 36 }}
            }
            else if (mf3 >= 5) {
                return {msg : `Você está com ${mf2.toFixed(1)} e sua nota arredondou para ${mf3}`, status: 'Aprovado', styled : {color: '#198754', fontSize: 36 }}
            } else {
                return {msg : `Você está de DP`, status: 'Reprovado', styled : {color: '#B00020', fontSize: 36 }}
            }
        }
    } else {
        return {msg : "Insira os valores da np1 e np2", status: 'Erro', styled : {color: '#B00020', fontSize: 36 }}
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