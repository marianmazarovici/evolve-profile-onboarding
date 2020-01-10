import { ImageStyle, StyleSheet, ViewStyle } from 'react-native'

export interface Style {
    container: ViewStyle
    logoContainer: ViewStyle
    logo: ImageStyle
}

const styles = StyleSheet.create<Style>({
    container: {
        height: 49,
        width: '100%',
    },
    logoContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
    },
    logo: {
        width: 38,
        height: 38,
    }
})

export default styles
