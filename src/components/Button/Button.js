import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Button.style'

const Button = ({ title, onPress, theme = 'primary' }) => {
    return (
        <TouchableOpacity
            style={styles[theme].container}
            onPress={onPress}
        >
            <Text style={styles[theme].title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button