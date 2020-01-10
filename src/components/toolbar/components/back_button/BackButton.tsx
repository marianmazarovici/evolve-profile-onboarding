import React, { ReactElement } from 'react'
import styles from './styles'
import { TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image'
import imgs from '../../../../assets/imgs/imgs'

interface Props {
    onPress?: () => void
}
const defaultProps: Props = {}

const BackButton = ({ onPress }: Props): ReactElement => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <FastImage style={styles.back} source={imgs.back} />
        </TouchableOpacity>
    )
}
BackButton.defaultProps = defaultProps

export default BackButton
