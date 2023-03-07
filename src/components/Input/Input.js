import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './Input.style'

const Input = ({ onChangeText, value, secureTextEntry = false }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.text}
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

export default Input