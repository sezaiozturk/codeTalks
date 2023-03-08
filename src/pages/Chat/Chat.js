import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './Chat.style'
import FloatButton from '../../components/FloatButton'
import ModalInputContext from '../../components/ModalInputContext'

const Chat = ({ roomName }) => {
    const [modalVisible, setModelVisible] = useState(false);
    function handleModalToggle() {
        setModelVisible(!modalVisible);
    }
    function handleMessage(text) {
        handleModalToggle();
        //console.log(text);
    }
    return (
        <View style={styles.container}>
            <View style={styles.head_container}>
                <Text style={styles.head}>{roomName} odası kuruldu !</Text>
            </View>
            <FloatButton onPress={handleModalToggle} />
            <ModalInputContext
                visible={modalVisible}
                onClose={handleModalToggle}
                onSend={handleMessage}
                placeHolder={"Your message"}
                buttonTitle={"Share"}
            />
        </View>
    )
}

export default Chat