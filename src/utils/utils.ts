import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const containsKeyword = (text: string, keyword: string): boolean =>
    text
        .toLowerCase()
        .split(' ')
        .includes(keyword.toLowerCase())

export { width, height, containsKeyword }
