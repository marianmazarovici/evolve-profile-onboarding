import { action, observable } from 'mobx'
import { ISeniorityItem } from './model/ISeniorityItem'
import { IRole } from './model/IRole'
import { IChatSection } from './model/IChatSection'
import { TBubble } from './model/TBubble'

export const DELAY: number = 1000

export default class ChatStore {
    @observable seniorityItems: ISeniorityItem[] = [
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
    ]
    @observable roles: IRole[] = [
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
    ]
    @observable conversation: IChatSection[] = []
    @observable keyword: string = 'UX'

    @observable selectedRole: IRole = null
    @observable selectedSeniorityItem: ISeniorityItem = null
    @observable totalLength: number = 0

    @action async setRole(role: IRole): Promise<void> {
        this.selectedRole = role
        const { title } = role
        this.addToConversation('user_message', title, false)
    }

    @action async setSeniorityItem(seniorityItem: ISeniorityItem): Promise<void> {
        this.selectedSeniorityItem = seniorityItem
        const { title } = seniorityItem
        this.addToConversation('user_message', title, false)
    }

    @action async addToConversation(
        type: TBubble,
        text?: string,
        withTimeout: boolean = true,
    ): Promise<void> {
        switch (type) {
            case 'bot_message':
                this.conversation.push({
                    title: '',
                    data: [
                        {
                            id: 0,
                            text: "I'm Aiyana, your personal Tribal guide 👋",
                            type: 'bot_message',
                            nextType: 'bot_role',
                            avatar:
                                'https://www.indiewire.com/wp-content/uploads/2019/07/Screen-Shot-2019-07-24-at-12.18.54-PM.png?w=780',
                            waiting: true,
                        },
                    ],
                })
                break
            case 'bot_role':
                withTimeout && (await this.sleep(DELAY))
                this.conversation[this.conversation.length - 1].data.push({
                    id: 1,
                    text:
                        'To find you Tribes that match you, please tell me your profession and seniority level',
                    type: 'bot_role',
                    nextType: 'user_message',
                    waiting: true,
                })
                break
            case 'bot_seniority':
                !this.selectedSeniorityItem &&
                    this.conversation.push({
                        title: '',
                        data: [
                            {
                                id: 0,
                                text: "Very exciting! What's your seniority level?",
                                type: 'bot_seniority',
                                nextType: 'user_message',
                                avatar:
                                    'https://www.indiewire.com/wp-content/uploads/2019/07/Screen-Shot-2019-07-24-at-12.18.54-PM.png?w=780',
                                waiting: true,
                            },
                        ],
                    })
                break
            case 'user_message':
                this.conversation.push({
                    title: '',
                    data: [
                        {
                            id: 0,
                            text,
                            type: 'user_message',
                            nextType: !this.selectedSeniorityItem ? 'bot_seniority' : 'unknown',
                            waiting: false,
                        },
                    ],
                })
                break
        }
        let length: number = 0
        this.conversation.forEach(({ data }) => (length += data.length))
        this.totalLength = length
        withTimeout && (await this.sleep(DELAY))
        const { data }: IChatSection = this.conversation[this.conversation.length - 1]
        data[data.length - 1].waiting = false
        this.conversation.forEach(section => section.data.forEach(cell => (cell.waiting = false)))
    }

    sleep(ms: number) {
        return new Promise(res => setTimeout(res, ms))
    }
}
