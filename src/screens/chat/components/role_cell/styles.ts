import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { colors } from '../../../../assets/colors'
import getPlatformFont from '../../../../assets/fonts/getFontByPlatform'

export interface Style {
    container: ViewStyle
    title: TextStyle
}

const styles = StyleSheet.create<Style>({
    container: {
        height: 45,
        backgroundColor: colors.darkBlue,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        overflow: 'hidden',
        borderRadius: 5,
        marginHorizontal: 3,
    },
    title: {
        ...getPlatformFont('sf_pro_display_bold'),
        fontSize: 16,
        color: 'white',
    },
})

export default styles
