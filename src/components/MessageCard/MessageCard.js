import { View, Text } from 'react-native'
import React from 'react'
import styles from './MessageCard.style'

const MessageCard = ({ userName, date, message }) => {
    return (
        <View style={styles.container}>
            <View style={styles.top_container}>
                <Text style={styles.user_name}>{userName}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
            <View style={styles.bottom_container}>
                <Text style={styles.message}>{message}</Text>
            </View>
        </View>
    )
}

export default MessageCard