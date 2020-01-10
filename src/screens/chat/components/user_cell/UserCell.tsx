import React, { ReactElement } from 'react'
import styles from './styles'
import { Text, View } from 'react-native'

interface Props {
    value: string
    index: number
}
const defaultProps: Props = {
    value: '',
    index: -1,
}

const UserCell = ({ value }: Props): ReactElement<any> => {
    return (
        <View style={styles.container}>
            <View style={styles.cellContainer}>
                <Text style={styles.title}>{value}</Text>
            </View>
        </View>
    )
}
UserCell.defaultProps = defaultProps

export default UserCell
