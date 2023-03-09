import { View, Text, SafeAreaView, Alert } from 'react-native'
import React from 'react'
import styles from './SignUp.style'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { Formik } from 'formik'
import { showMessage, hideMessage } from "react-native-flash-message";
import auth from '@react-native-firebase/auth'

const SignUp = ({ navigation }) => {
    const initialValues = {
        mail: '',
        password: '',
        rePassword: ''
    }
    function handleSignUp({ mail, password, rePassword }) {
        if (password != rePassword) {
            showMessage({
                message: 'Warning',
                type: 'danger',
                description: 'passwords are different',
                backgroundColor: 'white',
                color: 'black'
            });
            return;
        }
        auth().createUserWithEmailAndPassword(mail, password)
            .then(() => {
                navigation.goBack();
            })
            .catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                    showMessage({
                        message: 'That email address is already in use!'
                    });
                }

                if (error.code === 'auth/invalid-email') {
                    showMessage({
                        message: 'That email address is invalid!'
                    });
                }
                showMessage({
                    message: error.code
                });
            })
    }
    function handleBack() {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Text style={styles.logo}>codetalks</Text>
            </View>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSignUp}
            >
                {({ handleChange, handleSubmit, values }) => (
                    <View style={styles.inner_container}>
                        <View style={styles.input_container}>
                            <Input
                                onChangeText={handleChange('mail')}
                                onValue={values.mail}
                                placeholder={"Enter your e-mail"}
                            />
                            <Input
                                onChangeText={handleChange('password')}
                                onValue={values.password}
                                secureTextEntry
                                placeholder={"Enter your password"}
                            />
                            <Input
                                onChangeText={handleChange('rePassword')}
                                onValue={values.rePassword}
                                secureTextEntry
                                placeholder={"Enter your password(again)"}
                            />
                        </View>
                        <View style={styles.button_container}>
                            <Button title={'Sign Up'} onPress={handleSubmit} />
                            <Button title={'Back'} theme={'secondary'} onPress={handleBack} />
                        </View>
                    </View>
                )}
            </Formik>
        </SafeAreaView>
    )
}

export default SignUp