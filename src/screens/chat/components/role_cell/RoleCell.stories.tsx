import { storiesOf } from '@storybook/react-native'
import React from 'react'
import RoleCell from './RoleCell'

storiesOf('screens/chat/components/role_cell/RoleCell', module)
    .add('with data', () => <RoleCell value={'UX Designer'} index={0} />)
    .add('long data', () => (
        <RoleCell value={'UX Designer looooooooooooooooong loooooong looooooooong'} index={0} />
    ))
    .add('without data', () => <RoleCell />)
    .add('on press', () => (
        <RoleCell
            value={'UX Designer'}
            index={0}
            onPress={index => console.log('on press:: ', index)}
        />
    ))
