import { storiesOf } from '@storybook/react-native'
import React from 'react'
import BotCell from './BotCell'

storiesOf('screens/chat/components/bot_cell/BotCell', module)
    .add('with data', () => (
        <BotCell value={"I'm Aiyana, your personal Tribal guide 👋 "} index={1} />
    ))
    .add('long data', () => (
        <BotCell
            value={
                "I'm Aiyana, your personal Tribal guide 👋  looooooooooooooooong looooooong looooooong loooooong loooooong"
            }
            index={1}
        />
    ))
    .add('with avatar', () => (
        <BotCell
            value={"I'm Aiyana, your personal Tribal guide 👋 "}
            avatar={
                'https://www.indiewire.com/wp-content/uploads/2019/07/Screen-Shot-2019-07-24-at-12.18.54-PM.png?w=780'
            }
            index={0}
        />
    ))
    .add('without data', () => <BotCell />)
