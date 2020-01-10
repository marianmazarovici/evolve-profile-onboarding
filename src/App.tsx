import React from 'react'
import storeRoot from './store/rootStore'
import { Provider } from 'mobx-react'
import LinearGradient from 'react-native-linear-gradient'
import { colors } from './assets/colors'
import { SafeAreaView } from 'react-native'
import baseStyles from './components/baseStyles'
import { USE_STORYBOOK } from './appConstants'

export interface Props {}

const AppProvider = <P extends Props>(Component: React.ComponentType<P>) => (props: Props) => (
    <Provider {...storeRoot}>
        <LinearGradient
            colors={USE_STORYBOOK ? ['white', 'white'] : colors.backgroundGradient}
            style={baseStyles.container}>
            <SafeAreaView style={baseStyles.container}>
                <Component {...(props as P)} />
            </SafeAreaView>
        </LinearGradient>
    </Provider>
)

export default AppProvider
