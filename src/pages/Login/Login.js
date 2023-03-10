import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { Formik } from 'formik'
import styles from './Login.style'
import auth from '@react-native-firebase/auth'
import { showMessage } from 'react-native-flash-message'

const Login = ({ navigation }) => {
    const initialValues = {
        mail: '',
        password: ''
    }
    function handleLogin({ mail, password }) {
        auth().signInWithEmailAndPassword(mail, password)
            .then(() => {
                navigation.navigate('RoomsPage')
            })
            .catch((error) => {
                showMessage({
                    message: error.code
                })
            })
    }
    function handleSignUp() {
        navigation.navigate('SignUpPage');
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Text style={styles.logo}>codetalks</Text>
            </View>
            <Formik
                initialValues={initialValues}
                onSubmit={handleLogin}
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
                        </View>
                        <View style={styles.button_container}>
                            <Button title={'Login'} onPress={handleSubmit} />
                            <Button title={'Sign Up'} theme={'secondary'} onPress={handleSignUp} />
                        </View>
                    </View>
                )}
            </Formik>
        </SafeAreaView>
    )
}

export default Login