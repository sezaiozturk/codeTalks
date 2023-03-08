import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './Input.style'
import Colors from '../../styles/Colors/Colors'

const Input = ({ onChangeText, value, secureTextEntry = false, placeholder }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.text}
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                placeholderTextColor={Colors.white}
            />
        </View>
    )
}

export default Input