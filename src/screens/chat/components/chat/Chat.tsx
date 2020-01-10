import React, { ReactElement } from 'react'
import { SectionList } from 'react-native'
import { IBubble } from '../../../../store/model/IBubble'
import BotCell from '../bot_cell/BotCell'
import UserCell from '../user_cell/UserCell'
import { IChatSection } from '../../../../store/model/IChatSection'

interface Props {
    data: IChatSection[]
}
const defaultProps: Props = {
    data: [],
}

const Chat = ({ data }: Props): ReactElement<any> => {
    const renderItem = ({
        item: { type, avatar, text, waiting },
        index,
    }: {
        item: IBubble
        index: number
    }) => {
        let cell: ReactElement = null
        switch (type) {
            case 'bot_message':
                cell = <BotCell value={text} index={index} avatar={avatar} waiting={waiting} />
                break
            case 'user_message':
                cell = <UserCell value={text} index={index} />
                break
            case 'bot_role':
                cell = <BotCell value={text} index={index} avatar={avatar} waiting={waiting} />
                break
            case 'bot_seniority':
                cell = <BotCell value={text} index={index} avatar={avatar} waiting={waiting} />
                break
        }
        return cell
    }
    const keyExtractor = ({ id }: IBubble) => id.toString()
    return (
        <SectionList
            sections={data}
            renderSectionHeader={() => null}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
        />
    )
}
Chat.defaultProps = defaultProps

export default Chat
