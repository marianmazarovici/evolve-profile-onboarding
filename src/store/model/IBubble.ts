import { TBubble } from './TBubble'

export interface IBubble {
    type: TBubble
    text: string
    nextType: TBubble
    id: number
    avatar?: string
    waiting: boolean
}

export const bubbleDefault: IBubble = {
    type: 'unknown',
    text: '',
    nextType: 'unknown',
    id: -1,
    avatar: '',
    waiting: false,
}
