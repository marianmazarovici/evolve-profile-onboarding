import { storiesOf } from '@storybook/react-native'
import SeniorityModal from './SeniorityModal'
import React from 'react'

storiesOf('screens/chat/components/seniority_modal/SeniorityModal', module)
    .add('with data', () => (
        <SeniorityModal
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
            isVisible={true}
            onBackdropPress={() => {}}
            onItemPress={index => console.log('on press:: ', index)}
        />
    ))
    .add('without data', () => <SeniorityModal />)
