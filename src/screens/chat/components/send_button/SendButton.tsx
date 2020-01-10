import React, { ReactElement } from 'react'
import styles from './styles'
import { TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image'
import imgs from '../../../../assets/imgs/imgs'

interface Props {
    onPress?: () => void
}
const defaultProps: Props = {}

const SendButton = ({ onPress }: Props): ReactElement<any> => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <FastImage source={imgs.send} style={styles.arrow} />
        </TouchableOpacity>
    )
}
SendButton.defaultProps = defaultProps

export default SendButton
