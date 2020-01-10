import { ImageStyle, StyleSheet, ViewStyle } from 'react-native'
import { colors } from '../../../../assets/colors'

export interface Style {
    container: ViewStyle
    arrow: ImageStyle
}

const styles = StyleSheet.create<Style>({
    container: {
        width: 25,
        height: 25,
        borderRadius: 12.5,
        backgroundColor: colors.blue,
        alignItems: 'center',
        justifyContent: 'center',
    },
    arrow: {
        width: 13,
        height: 16,
    }
})

export default styles
