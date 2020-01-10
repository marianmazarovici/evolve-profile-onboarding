import React, { ReactElement } from 'react'
import styles from './styles'
import { Text, TextInput, TextInputProps, View } from 'react-native'
import SendButton from '../send_button/SendButton'

interface Props {
    value: string
    keyword: string
    textInputProps?: TextInputProps
    onSendPress?: () => void
}
const defaultProps: Props = {
    value: '',
    keyword: '',
}

const Input = ({ textInputProps, onSendPress, value }: Props): ReactElement<any> => {
    return (
        <View style={styles.container}>
            <TextInput
                {...textInputProps}
                autoCapitalize={'none'}
                autoCorrect={false}
                numberOfLines={1}
                style={styles.input}
                underlineColorAndroid={'transparent'}
                returnKeyType={'done'}
                autoFocus={true}>
                {getParsedChild(value)}
            </TextInput>
            <SendButton onPress={onSendPress} />
        </View>
    )
}
Input.defaultProps = defaultProps

const getParsedChild = (text: string): ReactElement[] | ReactElement => {
    return <Text style={styles.text}>{text}</Text>
}

export default Input
