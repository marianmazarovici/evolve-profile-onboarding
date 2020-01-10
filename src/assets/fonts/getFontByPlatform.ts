import { Platform, TextStyle } from 'react-native'

type FontName =
    | 'sf_pro_display_bold'
    | 'sf_pro_display_regular'
    | 'sf_pro_display_semibold'
    | 'sf_pro_text_regular'

const getPlatformFont = (fontName: FontName): TextStyle => {
    let fontStyle: TextStyle = {}
    switch (fontName) {
        case 'sf_pro_display_bold':
            fontStyle = {
                fontFamily: Platform.OS === 'ios' ? 'SFProDisplay-Bold' : 'sf_pro_display_bold',
            }
            break
        case 'sf_pro_display_regular':
            fontStyle = {
                fontFamily:
                    Platform.OS === 'ios' ? 'SFProDisplay-Regular' : 'sf_pro_display_regular',
            }
            break
        case 'sf_pro_display_semibold':
            fontStyle = {
                fontFamily:
                    Platform.OS === 'ios' ? 'SFProDisplay-Semibold' : 'sf_pro_display_semibold',
            }
            break
        case 'sf_pro_text_regular':
            fontStyle = {
                fontFamily: Platform.OS === 'ios' ? 'SFProText-Regular' : 'sf_pro_text_regular',
            }
            break
    }
    return fontStyle
}

export default getPlatformFont
