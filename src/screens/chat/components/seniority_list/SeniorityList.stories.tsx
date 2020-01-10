import { storiesOf } from '@storybook/react-native'
import React from 'react'
import SeniorityList from './SeniorityList'

storiesOf('screens/chat/components/seniority_list/SeniorityList', module)
    .add('with data', () => (
        <SeniorityList
            data={[
                {
                    id: 0,
                    title: 'Junior (1-3 years experience)',
                },
                {
                    id: 1,
                    title: 'Mid level (3-5 years experience)',
                },
                {
                    id: 2,
                    title: 'Senior (5-10 years experience)',
                },
                {
                    id: 3,
                    title: 'Lead level (10+ years experience)',
                },
            ]}
            onItemPress={index => console.log('on press:: ', index)}
        />
    ))
    .add('without data', () => <SeniorityList />)
