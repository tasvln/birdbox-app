import React, { useEffect } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import Bird from '../../components/svgs/Bird'
import Wave from '../../components/svgs/Wave'

import { Formik } from 'formik'

import { auth } from '../../firebase/Firebase'

export default function SignIn({ navigation }) {
    async function signIn( values ) {
        try {
         await auth.signInWithEmailAndPassword(values.email, values.password)
         navigation.navigate('MainStack')
         Alert.alert("Opor!", "Signed In Successfully!");
        } catch (err) {
          Alert.alert("Oops!", err.message)
        }
    }

    useEffect(() => {
        const unsub = auth.onAuthStateChanged((user) => {
            if (user) {
              navigation.replace('MainStack')
            } else {

            }
        });

        return unsub
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#272B34' }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.content}>
                        <View style={styles.bird}>
                            <Bird />
                        </View>
                        <View style={{ marginBottom: 100, marginTop: 50 }}>
                            <View style={styles.headertext}>
                                <Text style={{ fontSize: 42, color: '#fff', fontFamily: 'Rubik_700Bold', marginRight: 6 }}>Hellooo</Text>
                                <Wave />
                            </View>
                            <Text style={{ color: '#fff', opacity: .7, fontSize: 16, textAlign:'center', marginTop: 4, fontFamily: 'Rubik_400Regular' }}>Sign In To Your Birdbox Account</Text>
                        </View>
                        <Formik
                            initialValues={{ email: '', password: '' }}
                            onSubmit={async (values) => {
                                signIn(values)
                            }}
                        >
                            {({ handleChange, handleBlur, isSubmitting, handleSubmit, values }) => (
                                <View>
                                    <TextInput 
                                        style={styles.input}
                                        placeholder='Enter Your Email'
                                        placeholderTextColor="#ffffff8a"
                                        keyboardType="email-address"
                                        returnKeyType='done'
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                    />
                                    <TextInput 
                                        style={styles.input}
                                        placeholder='Enter Password'
                                        placeholderTextColor="#ffffff8a"
                                        returnKeyType='done'
                                        secureTextEntry={true}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                    />
                                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <TouchableOpacity style={styles.signinbutton} disabled={isSubmitting} onPress={handleSubmit}>
                                            <Text style={{ color: '#557ade', fontFamily: 'Rubik_700Bold', fontSize: 18, textAlign: 'center' }}>SIGN IN</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.signupbutton} onPress={() => navigation.navigate('SignUp')}>
                                            <Text style={{ color: '#eb7a4f', fontFamily: 'Rubik_700Bold', fontSize: 18, textAlign: 'center' }}>SIGN UP</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        </Formik>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#272B34'
    },
    content: {
        padding: 24,
        flex: 1,
    },
    bird: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    headertext: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    signinview: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: 100
    },
    rowtogether: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    signinbutton: {
        padding: 20,
        borderRadius: 9999,
        backgroundColor: '#557ade1a',
        width: '55%'
    },
    signupbutton: {
        padding: 20,
        borderRadius: 9999,
        backgroundColor: '#eb7a4f1a',
        width: '40%'
    },
    googlesub: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    input: {
        padding: 20,
        borderRadius: 9999,
        backgroundColor: '#373d49',
        marginBottom: 16,
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Rubik_400Regular',
    }
});
