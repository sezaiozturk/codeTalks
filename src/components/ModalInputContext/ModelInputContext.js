import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import Button from '../Button';
import Modal from 'react-native-modal'
import styles from './ModelInputContext.style'

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
                        style={styles.input}
                        placeholder={`${placeHolder}...`}
                        onChangeText={setText}
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