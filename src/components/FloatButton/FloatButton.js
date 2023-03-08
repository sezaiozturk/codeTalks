import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import styles from './FloatButton.style'

const FloatButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon name='plus' style={styles.icon} />
        </TouchableOpacity>
    )
}

export default FloatButton