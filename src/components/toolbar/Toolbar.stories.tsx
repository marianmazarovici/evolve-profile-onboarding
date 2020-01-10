import { storiesOf } from '@storybook/react-native'
import React from 'react'
import Toolbar from './Toolbar'

storiesOf('components/toolbar/Toolbar', module).add('on press', () => (
    <Toolbar onBackPress={() => console.log('on press')} />
))
