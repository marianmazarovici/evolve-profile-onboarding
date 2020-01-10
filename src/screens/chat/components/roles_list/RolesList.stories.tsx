import { storiesOf } from '@storybook/react-native'
import React from 'react'
import RolesList from './RolesList'

storiesOf('screens/chat/components/roles_list/RolesList', module)
    .add('with data', () => (
        <RolesList
            data={[
                {
                    id: 0,
                    title: 'UX Designer',
                },
                {
                    id: 1,
                    title: 'UX Researcher',
                },
                {
                    id: 2,
                    title: 'UX Architect',
                },
            ]}
            onItemPress={index => console.log('on press:: ', index)}
        />
    ))
    .add('without data', () => <RolesList />)
