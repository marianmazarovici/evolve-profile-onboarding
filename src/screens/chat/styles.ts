import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import getPlatformFont from '../../assets/fonts/getFontByPlatform'
import { colors } from '../../assets/colors'

export interface Style {
    container: ViewStyle
    chatContainer: ViewStyle
    inputContainer: ViewStyle
    suggestedRoles: TextStyle
}

const styles = StyleSheet.create<Style>({
    container: {
        flex: 1,
    },
    chatContainer: {
        flex: 1,
        paddingHorizontal: 13,
    },
    inputContainer: {
        width: '100%',
        backgroundColor: colors.black_1,
        padding: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    suggestedRoles: {
        ...getPlatformFont('sf_pro_text_regular'),
        color: colors.grey_1,
        fontSize: 12,
        marginStart: 13,
        marginBottom: 6,
    },
})

export default styles
