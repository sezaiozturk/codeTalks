import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './SignUp.style'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { Formik } from 'formik'

const SignUp = ({ navigation }) => {
    const initialValues = {
        mail: '',
        password: '',
        rePassword: ''
    }
    function handleSignUp(values) {
        console.log(values);
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
                            />
                            <Input
                                onChangeText={handleChange('password')}
                                onValue={values.password}
                                secureTextEntry
                            />
                            <Input
                                onChangeText={handleChange('rePassword')}
                                onValue={values.rePassword}
                                secureTextEntry
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