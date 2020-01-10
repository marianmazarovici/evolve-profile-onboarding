import { storiesOf } from '@storybook/react-native'
import React from 'react'
import UserCell from './UserCell'

storiesOf('screens/chat/components/user_cell/UserCell', module)
    .add('with data', () => <UserCell value={'UX Designer'} index={0} />)
    .add('long data', () => (
        <UserCell
            value={'UX Designer looooooooooooooooong looooooong looooooong loooooong loooooong'}
            index={0}
        />
    ))
    .add('without data', () => <UserCell />)
