import { IBubble } from './IBubble'

export interface IChatSection {
    title: string
    data: IBubble[]
}

export const defaultChatSection: IChatSection = {
    title: '',
    data: [],
}
