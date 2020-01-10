import { ImageStyle, StyleSheet, ViewStyle } from 'react-native'

export interface Style {
    container: ViewStyle
    back: ImageStyle
}

const styles = StyleSheet.create<Style>({
    container: {
        height: 49,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    back: {
        width: 12,
        height: 22,
    }
})

export default styles
