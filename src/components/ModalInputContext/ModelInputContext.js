import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import Input from '../Input'
import Button from '../Button';
import Modal from 'react-native-modal'
import styles from './ModelInputContext.style'
import Colors from '../../styles/Colors/Colors';

const ModelInputContext = ({ visible, onSend, onClose, buttonTitle, placeHolder }) => {
    const [text, setText] = useState('');
    return (
        <Modal
            isVisible={visible}
            onSwipeComplete={onClose}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
            style={styles.modal_container}
        >
            <View style={styles.container}>
                <View style={styles.top_container}>
                    <TextInput
                        placeHolder={"dfgfd"}
                        onChangeText={setText}
                        style={styles.input}
                        placeholderTextColor={Colors.orange_dark}
                    />
                </View>
                <View style={styles.bottom_container}>
                    <Button title={buttonTitle} onPress={() => onSend(text)} />
                </View>
            </View>
        </Modal>
    )
}

export default ModelInputContext