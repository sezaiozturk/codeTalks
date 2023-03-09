import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Rooms.style'
import RoomButton from '../../components/RoomButton'
import FloatButton from '../../components/FloatButton'
import ModalInputContext from '../../components/ModalInputContext'
import firestore from '@react-native-firebase/firestore';
import { showMessage } from 'react-native-flash-message'

const Rooms = () => {
    const [modalVisible, setModelVisible] = useState(false);
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        firestore()
            .collection('Rooms')
            .onSnapshot(querySnapshot => {
                const roomList = [];
                querySnapshot.forEach(documentSnapshot => {
                    roomList.push({
                        ...documentSnapshot.data()
                    })
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
            .add({ roomName })
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
    const renderItem = ({ item }) => <RoomButton title={item.roomName} />
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