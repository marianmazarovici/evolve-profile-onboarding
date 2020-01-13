import React, { ReactElement, useEffect, useState } from 'react'
import styles from './styles'
import { Options } from 'react-native-navigation'
import { waitForRenderOptions } from '../../utils/navigationUtils'
import Toolbar from '../../components/toolbar/Toolbar'
import { KeyboardAvoidingView, Platform, StatusBar, Text, View } from 'react-native'
import Chat from './components/chat/Chat'
import { inject, observer } from 'mobx-react'
import ChatStore, { DELAY } from '../../store/chatStore'
import Input from './components/input/Input'
import i18n from 'i18n-js'
import RolesList from './components/roles_list/RolesList'
import SeniorityModal from './components/seniority_modal/SeniorityModal'
import { IReactionDisposer, reaction, toJS } from 'mobx'
import { IChatSection } from '../../store/model/IChatSection'
import * as Animatable from 'react-native-animatable'
import { containsKeyword } from '../../utils/utils'
import { USE_STORYBOOK } from '../../appConstants'
import { colors } from '../../assets/colors'
import baseStyles from '../../components/baseStyles'
import LinearGradient from 'react-native-linear-gradient'

export const ANIMATION_DURATION: number = 1000

interface Props {
    chatStore?: ChatStore
}
const defaultProps: Props = {}

const ChatScreen = ({ chatStore }: Props): ReactElement => {
    const { conversation, keyword, roles, seniorityItems } = chatStore
    const [inputValue, setInputValue] = useState<string>('')
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const [roleVisible, setRoleVisible] = useState<boolean>(false)
    const handleTextChange = (text: string) => setInputValue(text)
    const handleRolePress = (index: number) => chatStore.setRole(roles[index])
    const handleSeniorityItemPress = (index: number) =>
        chatStore.setSeniorityItem(seniorityItems[index])
    const handleSendPress = () =>
        inputValue &&
        chatStore.setRole({
            title: inputValue,
            id: 0,
        })

    useEffect(() => {
        let roleTimeout: NodeJS.Timeout = null
        let modalTimeout: NodeJS.Timeout = null
        const reactionDisposer: IReactionDisposer = reaction(
            () => chatStore.totalLength,
            () => {
                const { data }: IChatSection = conversation[conversation.length - 1]
                const { nextType, type } = data[data.length - 1]

                switch (type) {
                    case 'bot_role':
                        roleTimeout = setTimeout(() => setRoleVisible(true), DELAY)
                        break
                    case 'bot_seniority':
                        modalTimeout = setTimeout(() => setModalVisible(true), DELAY)
                        break
                    case 'bot_message':
                        chatStore.addToConversation(nextType).catch()
                        break
                    case 'user_message':
                        chatStore.addToConversation(nextType).catch()
                        setRoleVisible(false)
                        setModalVisible(false)
                        break
                }
            },
        )
        chatStore.addToConversation('bot_message').catch()
        return () => {
            reactionDisposer && reactionDisposer()
            roleTimeout && clearTimeout(roleTimeout)
            modalTimeout && clearTimeout(modalTimeout)
        }
    }, [])

    return (
        <KeyboardAvoidingView
            behavior={'padding'}
            enabled={Platform.OS === 'ios'}
            style={styles.container}>
            <LinearGradient
                colors={USE_STORYBOOK ? ['white', 'white'] : colors.backgroundGradient}
                style={baseStyles.container}>
                <StatusBar barStyle={'light-content'} />
                <Toolbar />
                <View style={styles.chatContainer}>
                    <Chat data={toJS(conversation)} />
                </View>
                {roleVisible ? (
                    <>
                        {containsKeyword(inputValue, keyword) ? (
                            <Animatable.View
                                animation={'bounceInRight'}
                                duration={ANIMATION_DURATION}>
                                <>
                                    <Text style={styles.suggestedRoles}>
                                        {i18n.t('SUGGESTED ROLES')}
                                    </Text>
                                    <View>
                                        <RolesList
                                            data={toJS(roles)}
                                            onItemPress={handleRolePress}
                                        />
                                    </View>
                                </>
                            </Animatable.View>
                        ) : null}
                        <View style={styles.inputContainer}>
                            <Input
                                textInputProps={{ onChangeText: handleTextChange }}
                                value={inputValue}
                                keyword={keyword}
                                onSendPress={handleSendPress}
                            />
                        </View>
                    </>
                ) : null}
                <SeniorityModal
                    isVisible={modalVisible}
                    data={toJS(seniorityItems)}
                    onItemPress={handleSeniorityItemPress}
                />
            </LinearGradient>
        </KeyboardAvoidingView>
    )
}

ChatScreen.defaultProps = defaultProps
ChatScreen.options = (): Options => waitForRenderOptions()

export default inject('chatStore')(observer(ChatScreen))
