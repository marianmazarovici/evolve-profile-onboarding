import React, { ReactElement } from 'react'
import styles from './styles'
import { Text, TouchableOpacity } from 'react-native'

interface Props {
    value: string
    index: number
    onPress?: (index: number) => void
}
const defaultProps: Props = { value: '', index: -1 }

const SeniorityCell = ({ value, index, onPress }: Props): ReactElement => {
    const handlePress = () => onPress && onPress(index)
    return (
        <TouchableOpacity onPress={handlePress} style={styles.container}>
            <Text numberOfLines={1} style={styles.title}>
                {value}
            </Text>
        </TouchableOpacity>
    )
}
SeniorityCell.defaultProps = defaultProps

export default SeniorityCell
