import { storiesOf } from '@storybook/react-native'
import React from 'react'
import Chat from './Chat'

storiesOf('screens/chat/components/chat/Chat', module)
    .add('with data', () => (
        <Chat
            data={[
                {
                    title: '',
                    data: [
                        {
                            id: 0,
                            text: "I'm Aiyana, your personal Tribal guide 👋",
                            type: 'bot_message',
                            nextType: 'bot_role',
                            avatar:
                                'https://www.indiewire.com/wp-content/uploads/2019/07/Screen-Shot-2019-07-24-at-12.18.54-PM.png?w=780',
                            waiting: false,
                        },
                        {
                            id: 1,
                            text:
                                'To find you Tribes that match you, please tell me your profession and seniority level',
                            type: 'bot_role',
                            nextType: 'user_message',
                            waiting: false,
                        },
                    ],
                },
                {
                    title: '',
                    data: [
                        {
                            id: 0,
                            text: 'UX Designer',
                            type: 'user_message',
                            nextType: 'bot_seniority',
                            waiting: false,
                        },
                    ],
                },
                {
                    title: '',
                    data: [
                        {
                            id: 0,
                            text: "Very exciting! What's your seniority level?",
                            type: 'bot_seniority',
                            nextType: 'user_message',
                            waiting: false,
                        },
                    ],
                },
                {
                    title: '',
                    data: [
                        {
                            id: 0,
                            text: 'Senior (5-10 years experience)',
                            type: 'user_message',
                            nextType: 'unknown',
                            waiting: false,
                        },
                    ],
                },
            ]}
        />
    ))
    .add('without data', () => <Chat />)
