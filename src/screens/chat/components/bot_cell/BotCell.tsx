import React, { ReactElement } from 'react'
import styles from './styles'
import { View } from 'react-native'
import FastImage from 'react-native-fast-image'
// @ts-ignore
import { DotsLoader } from 'react-native-indicator'
import { colors } from '../../../../assets/colors'
import * as Animatable from 'react-native-animatable'
import { ANIMATION_DURATION } from '../../ChatScreen'

interface Props {
    avatar?: string
    value: string
    index: number
    waiting: boolean
}
const defaultProps: Props = {
    avatar: '',
    value: '',
    index: -1,
    waiting: true,
}

const BotCell = ({ avatar, value, index, waiting }: Props): ReactElement => {
    return (
        <View style={styles.container}>
            {index === 0 ? (
                <FastImage source={{ uri: avatar }} style={styles.avatar} />
            ) : (
                <View style={styles.avatar} />
            )}
            <View style={styles.rightContainer}>
                <View style={styles.cellContainer}>
                    {waiting ? (
                        <DotsLoader color={colors.grey_1} />
                    ) : (
                        <Animatable.Text
                            duration={ANIMATION_DURATION}
                            animation={'bounceInLeft'}
                            style={styles.title}>
                            {value}
                        </Animatable.Text>
                    )}
                </View>
            </View>
        </View>
    )
}
BotCell.defaultProps = defaultProps

export default BotCell
