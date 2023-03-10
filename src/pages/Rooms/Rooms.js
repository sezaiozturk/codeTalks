import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Rooms.style'
import RoomButton from '../../components/RoomButton'
import FloatButton from '../../components/FloatButton'
import ModalInputContext from '../../components/ModalInputContext'
import firestore from '@react-native-firebase/firestore';
import { showMessage } from 'react-native-flash-message'

const Rooms = ({ navigation }) => {
    const [modalVisible, setModelVisible] = useState(false);
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        firestore()
            .collection('Rooms')
            .onSnapshot(querySnapshot => {
                const roomList = [];
                querySnapshot.forEach(documentSnapshot => {
                    roomList.push({
                        ...documentSnapshot.data(),
                        id: documentSnapshot.id
                    })
                });
                roomList.sort(function (a, b) {
                    return (a.date > b.date) ? -1 : ((a.date > b.date) ? 1 : 0);
                });
                setRooms(roomList);
            });
    }, []);
    function handleModalToggle() {
        setModelVisible(!modalVisible);
    }
    function handleSend(roomName) {
        handleModalToggle();
        openRoom(roomName);
    }
    function openRoom(roomName) {
        firestore().collection("Rooms")
            .add({
                roomName,
                date: new Date().toISOString()
            })
            .then(() => {
                showMessage({
                    message: `${roomName} is opened`
                })
            })
            .catch((error) => {
                showMessage({
                    message: error.code
                })
            })
    }
    function handleGoToChat({ id, roomName }) {
        navigation.navigate('ChatPage', {
            id,
            roomName
        });
    }
    const renderItem = ({ item }) => <RoomButton
        title={item.roomName}
        onPress={() => handleGoToChat(item)}
    />
    return (
        <View style={styles.container}>
            <FlatList data={rooms} renderItem={renderItem} numColumns='2' />
            <FloatButton onPress={handleModalToggle} />
            <ModalInputContext
                visible={modalVisible}
                onClose={handleModalToggle}
                onSend={handleSend}
                placeHolder={"Room name"}
                buttonTitle={"Add"}
            />
        </View>
    )
}

export default Rooms