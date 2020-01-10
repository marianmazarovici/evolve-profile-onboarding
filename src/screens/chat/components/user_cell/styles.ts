import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { colors } from '../../../../assets/colors'
import getPlatformFont from '../../../../assets/fonts/getFontByPlatform'

export interface Style {
    container: ViewStyle
    cellContainer: ViewStyle
    title: TextStyle
}

const styles = StyleSheet.create<Style>({
    container: {
        marginVertical: 4,
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    cellContainer: {
        paddingHorizontal: 14,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: colors.blue,
        borderTopStartRadius: 5,
        borderTopEndRadius: 5,
        borderBottomStartRadius: 5,
        overflow: 'hidden',
        paddingVertical: 4,
    },
    title: {
        ...getPlatformFont('sf_pro_display_semibold'),
        color: 'white',
        fontSize: 16,
    },
})

export default styles
