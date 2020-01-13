import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { colors } from '../../../../assets/colors'
import getPlatformFont from '../../../../assets/fonts/getFontByPlatform'

export interface Style {
    container: ViewStyle
    input: TextStyle
    text: TextStyle
    nested: TextStyle
}

const text: TextStyle = {
    ...getPlatformFont('sf_pro_display_regular'),
    fontSize: 14,
}

const styles = StyleSheet.create<Style>({
    container: {
        backgroundColor: colors.black,
        borderRadius: 6,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingStart: 11,
        paddingEnd: 4,
        // opacity: 0.44,
    },
    input: {
        flex: 1,
        marginEnd: 11,
    },
    text: {
        ...text,
        color: colors.grey,
    },
    nested: {
        ...text,
        color: 'white',
    },
})

export default styles
