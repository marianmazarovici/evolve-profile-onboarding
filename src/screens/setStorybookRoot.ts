import { registerScreens, STORYBOOK } from './screens'
import { Navigation } from 'react-native-navigation'
import SplashScreenNative from 'react-native-splash-screen'
import { configure } from '@storybook/react-native'

const registerStories = () => {
    configure(() => {
        require('./chat/components/input/Input.stories')
        require('./chat/components/chat/Chat.stories')
        require('./chat/components/bot_cell/BotCell.stories')
        require('./chat/components/user_cell/UserCell.stories')
        require('./chat/components/roles_list/RolesList.stories')
        require('./chat/components/role_cell/RoleCell.stories')
        require('./chat/components/send_button/SendButton.stories')
        require('./chat/components/seniority_modal/SeniorityModal.stories')
        require('./chat/components/seniority_list/SeniorityList.stories')
        require('./chat/components/seniority_cell/SeniorityCell.stories')
        require('../components/toolbar/Toolbar.stories')
        require('../components/toolbar/components/back_button/BackButton.stories')
    }, module)
}

const setStorybookRoot = (): void => {
    registerScreens()
    registerStories()
    Navigation.setRoot({
        root: {
            component: {
                name: STORYBOOK,
            },
        },
    })
        .then(() => SplashScreenNative.hide())
        .catch()
}

export { setStorybookRoot }
