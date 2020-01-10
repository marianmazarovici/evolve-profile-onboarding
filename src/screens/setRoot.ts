import { SPLASH_SCREEN } from './screens'
import { Navigation } from 'react-native-navigation'

const setDefaultOptions = (): void => {
    Navigation.setDefaultOptions({
        layout: {
            backgroundColor: 'white',
            componentBackgroundColor: 'white',
            orientation: ['portrait'],
        },
        topBar: {
            visible: false,
        },
        statusBar: {
            style: 'light',
        },
    })
}

const setRoot = (): void => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: SPLASH_SCREEN,
                        },
                    },
                ],
            },
        },
    }).catch()
}

export { setDefaultOptions, setRoot }
