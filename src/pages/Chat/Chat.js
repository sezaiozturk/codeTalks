import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Chat.style'
import FloatButton from '../../components/FloatButton'
import ModalInputContext from '../../components/ModalInputContext'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'
import { showMessage } from 'react-native-flash-message'
import MessageCard from '../../components/MessageCard'
import { formatDistance, parseISO } from 'date-fns'
import { tr } from 'date-fns/locale'

const Chat = ({ route }) => {
    const { id, roomName } = route.params;
    const userName = auth().currentUser.email.split('@')[0];
    const [modalVisible, setModelVisible] = useState(false);
    const [messageList, setMessageList] = useState([]);
    useEffect(() => {
        firestore().collection('Chat')
            .where('id', '==', id)
            .onSnapshot(querySnapshot => {
                const messages = [];
                querySnapshot.forEach(documentSnapshot => {
                    messages.push({
                        ...documentSnapshot.data(),
                        id: documentSnapshot.id
                    })
                })
                messages.sort(function (a, b) {
                    return (a.date > b.date) ? -1 : ((a.date > b.date) ? 1 : 0);
                });
                setMessageList(messages);
            })
    }, [])
    function handleModalToggle() {
        setModelVisible(!modalVisible);
    }
    function handleMessage(message) {
        firestore()
            .collection('Chat')
            .add({
                id,
                userName,
                date: new Date().toISOString(),
                message
            })
            .then(() => {
                handleModalToggle();
            })
            .catch(error => {
                showMessage({
                    message: error.code
                });
            })
    }
    const renderItem = ({ item }) => <MessageCard
        userName={item.userName}
        message={item.message}
        date={
            formatDistance(
                parseISO(item.date),
                new Date(),
                {
                    addSuffix: true,
                    locale: tr
                })
        }
    />
    return (
        <View style={styles.container}>
            <View style={styles.head_container}>
                <Text style={styles.head}>{roomName} odası kuruldu !</Text>
            </View>
            <FlatList data={messageList} renderItem={renderItem} />
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