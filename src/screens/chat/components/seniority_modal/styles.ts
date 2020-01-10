import { StyleSheet, ViewStyle } from 'react-native'

export interface Style {
    modal: ViewStyle
}

const styles = StyleSheet.create<Style>({
    modal: {
        margin: 0,
        justifyContent: 'flex-end',
        paddingHorizontal: 14,
    },
})

export default styles
