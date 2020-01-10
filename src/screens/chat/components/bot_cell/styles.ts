import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { colors } from '../../../../assets/colors'
import getPlatformFont from '../../../../assets/fonts/getFontByPlatform'
import { width } from '../../../../utils/utils'

const AVATART_SIZE: number = 34
const LIST_MARGIN: number = 13
const TITLE_MARGIN: number = 6

export interface Style {
    container: ViewStyle
    avatar: ImageStyle
    cellContainer: ViewStyle
    title: TextStyle
    rightContainer: ViewStyle
}

const styles = StyleSheet.create<Style>({
    container: {
        flexDirection: 'row',
        marginVertical: 4,
    },
    avatar: {
        width: AVATART_SIZE,
        height: AVATART_SIZE,
        borderRadius: AVATART_SIZE / 2,
    },
    rightContainer: {
        width: width - AVATART_SIZE - LIST_MARGIN * 2 - TITLE_MARGIN,
        flexDirection: 'row',
    },
    cellContainer: {
        paddingHorizontal: 14,
        justifyContent: 'center',
        backgroundColor: colors.darkBlue,
        borderTopStartRadius: 5,
        borderTopEndRadius: 5,
        borderBottomEndRadius: 5,
        overflow: 'hidden',
        paddingVertical: 4,
        marginStart: 6,
    },
    title: {
        ...getPlatformFont('sf_pro_display_semibold'),
        color: 'white',
        fontSize: 16,
    },
})

export default styles
