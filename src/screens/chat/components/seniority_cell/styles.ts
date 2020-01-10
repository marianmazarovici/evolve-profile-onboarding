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
        width: '100%',
        backgroundColor: colors.darkBlue,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        overflow: 'hidden',
        borderRadius: 5,
        marginVertical: 5,
    },
    title: {
        ...getPlatformFont('sf_pro_display_bold'),
        fontSize: 16,
        color: 'white',
    },
})

export default styles
