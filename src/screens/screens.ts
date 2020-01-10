import { SCREENS_PACKAGE } from '../appConstants'
import { Navigation } from 'react-native-navigation'
import { getStorybookUI } from '@storybook/react-native'
import SplashScreen from './splash/SplashScreen'
import AppProvider from '../App'
import ChatScreen from './chat/ChatScreen'

const STORYBOOK = `${SCREENS_PACKAGE}.STORYBOOK`
const SPLASH_SCREEN = `${SCREENS_PACKAGE}.SPLASH_SCREEN`
const CHAT_SCREEN = `${SCREENS_PACKAGE}.CHAT_SCREEN`

const screens: { id: string; screen: any }[] = [
    {
        id: STORYBOOK,
        screen: getStorybookUI(),
    },
    {
        id: SPLASH_SCREEN,
        screen: SplashScreen,
    },
    {
        id: CHAT_SCREEN,
        screen: ChatScreen,
    },
]

const registerScreens = (): void => {
    screens.forEach(({ id, screen }) =>
        Navigation.registerComponent(id, () => AppProvider(screen), () => screen),
    )
}

export { registerScreens, STORYBOOK, SPLASH_SCREEN, CHAT_SCREEN }
