import { storiesOf } from '@storybook/react-native'
import React from 'react'
import BackButton from './BackButton'

storiesOf('components/toolbar/back_button/BackButton', module)
    .add('on press', () => <BackButton onPress={() => console.log('on press')} />)