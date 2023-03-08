import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from './Rooms.style'
import RoomButton from '../../components/RoomButton'
import FloatButton from '../../components/FloatButton'
import ModalInputContext from '../../components/ModalInputContext'

const Rooms = () => {
    const [modalVisible, setModelVisible] = useState(false);
    function handleModalToggle() {
        setModelVisible(!modalVisible);
    }
    function handleSend(roomName) {
        handleModalToggle();
        //Add room codes
    }
    const dizi = ["room1", "room2", "room3", "room4", "room5"];
    return (
        <View style={styles.container}>
            <FlatList data={dizi} renderItem={({ item }) => <RoomButton title={item} />} numColumns={2} />
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