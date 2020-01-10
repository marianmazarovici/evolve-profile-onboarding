import { StyleSheet, ViewStyle } from 'react-native'

export interface Style {
    container: ViewStyle
}

const styles = StyleSheet.create<Style>({
    container: {
        paddingHorizontal: 11,
    },
})

export default styles
