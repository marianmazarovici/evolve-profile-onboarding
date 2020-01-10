import React, { ReactElement, useEffect, useState } from 'react'
import styles from './styles'
import Modal from 'react-native-modal'
import { ISeniorityItem } from '../../../../store/model/ISeniorityItem'
import SeniorityList from '../seniority_list/SeniorityList'
import { SafeAreaView } from 'react-native'
import { ANIMATION_DURATION } from '../../ChatScreen'

interface Props {
    isVisible: boolean
    data: ISeniorityItem[]
    onItemPress?: (index: number) => void
}
const defaultProps: Props = {
    isVisible: false,
    data: [],
}

const SeniorityModal = ({ isVisible, data, onItemPress }: Props): ReactElement => {
    const [visible, setVisible] = useState<boolean>(isVisible)
    const handleItemPress = (index: number) => {
        setVisible(false)
        onItemPress && onItemPress(index)
    }
    useEffect(() => setVisible(isVisible), [isVisible])
    return (
        <Modal
            animationInTiming={ANIMATION_DURATION}
            animationOutTiming={ANIMATION_DURATION}
            backdropTransitionOutTiming={ANIMATION_DURATION}
            backdropTransitionInTiming={ANIMATION_DURATION}
            animationIn={'slideInUp'}
            animationOut={'slideOutDown'}
            backdropColor={'transparent'}
            propagateSwipe={true}
            style={styles.modal}
            isVisible={visible}>
            <SafeAreaView>
                <SeniorityList data={data} onItemPress={handleItemPress} />
            </SafeAreaView>
        </Modal>
    )
}
SeniorityModal.defaultProps = defaultProps

export default SeniorityModal
