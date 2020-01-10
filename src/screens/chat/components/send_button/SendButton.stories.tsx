import { storiesOf } from '@storybook/react-native'
import React from 'react'
import SendButton from './SendButton'

storiesOf('screens/chat/components/send_button/SendButton', module).add('on press', () => (
    <SendButton onPress={() => console.log('on press')} />
))
