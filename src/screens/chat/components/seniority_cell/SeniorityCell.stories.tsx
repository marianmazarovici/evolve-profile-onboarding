import { storiesOf } from '@storybook/react-native'
import React from 'react'
import SeniorityCell from './SeniorityCell'

storiesOf('screens/chat/components/seniority_cell/SeniorityCell', module)
    .add('with data', () => <SeniorityCell value={'Junior (1-3 years experience)'} index={0} />)
    .add('long data', () => (
        <SeniorityCell value={'Junior (1-3 years experience) looooooooooooooooong'} index={0} />
    ))
    .add('without data', () => <SeniorityCell />)
    .add('on press', () => (
        <SeniorityCell
            value={'Junior (1-3 years experience)'}
            index={0}
            onPress={index => console.log('on press:: ', index)}
        />
    ))
