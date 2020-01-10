import React, { ReactElement } from 'react'
import styles from './styles'
import { View } from 'react-native'
import FastImage from 'react-native-fast-image'
import imgs from '../../assets/imgs/imgs'
import BackButton from './components/back_button/BackButton'

interface Props {
    onBackPress?: () => void
}
const defaultProps: Props = {}

const Toolbar = ({ onBackPress }: Props): ReactElement<any> => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <FastImage source={imgs.logo} style={styles.logo} />
            </View>
            <BackButton onPress={onBackPress} />
        </View>
    )
}
Toolbar.defaultProps = defaultProps

export default Toolbar
