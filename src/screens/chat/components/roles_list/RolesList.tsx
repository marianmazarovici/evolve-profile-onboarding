import React, { ReactElement } from 'react'
import { FlatList } from 'react-native'
import { IRole } from '../../../../store/model/IRole'
import RoleCell from '../role_cell/RoleCell'
import styles from './styles'

interface Props {
    data: IRole[]
    onItemPress?: (index: number) => void
}
const defaultProps: Props = {
    data: [],
}

const RolesList = ({ data, onItemPress }: Props): ReactElement<any> => {
    const renderItem = ({ item: { title }, index }: { item: IRole; index: number }) => (
        <RoleCell value={title} index={index} onPress={onItemPress} />
    )
    const keyExtractor = ({ id }: IRole) => id.toString()
    return (
        <FlatList
            horizontal={true}
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            style={styles.container}
        />
    )
}
RolesList.defaultProps = defaultProps

export default RolesList
