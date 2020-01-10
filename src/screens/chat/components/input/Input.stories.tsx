import { storiesOf } from '@storybook/react-native'
import React from 'react'
import Input from './Input'

storiesOf('screens/chat/components/input/Input', module)
    .add('with keyword', () => <Input value={'My Profession is UX'} keyword={'UX'} />)
    .add('without keyword', () => <Input value={'My Profession is UX'} keyword={'DEV'} />)
    .add('without data', () => <Input />)
