import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './RoomButton.style'

const RoomButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default RoomButton