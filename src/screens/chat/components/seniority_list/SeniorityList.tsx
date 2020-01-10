import React, { ReactElement } from 'react'
import { FlatList } from 'react-native'
import { ISeniorityItem } from '../../../../store/model/ISeniorityItem'
import SeniorityCell from '../seniority_cell/SeniorityCell'

interface Props {
    data: ISeniorityItem[]
    onItemPress?: (index: number) => void
}
const defaultProps: Props = {
    data: [],
}

const SeniorityList = ({ data, onItemPress }: Props): ReactElement => {
    const renderItem = ({ item: { title }, index }: { item: ISeniorityItem; index: number }) => (
        <SeniorityCell value={title} index={index} onPress={onItemPress} />
    )
    const keyExtractor = ({ id }: ISeniorityItem) => id.toString()
    return (
        <FlatList
            scrollEnabled={false}
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
        />
    )
}
SeniorityList.defaultProps = defaultProps

export default SeniorityList
