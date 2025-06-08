import { StyleSheet, View } from "react-native"
import { Input, Txt } from "../../home/styles"

export type InputProps = {
    txt: string
    placeholder: string
    placeholderTextColor: string
    value: string
    onChangeText: (entrada: string) => void
}


const InputComponent = (props: InputProps) => {
    return (
        <View style={style.container}>
            <Txt>{props.txt}</Txt>
            <Input
                placeholder={props.placeholder}
                placeholderTextColor={props.placeholderTextColor}
                value={props.value}
                keyboardType='numeric'
                onChangeText={props.onChangeText} />
        </View>
    )

}

const style = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center'
    }
})

export default InputComponent;