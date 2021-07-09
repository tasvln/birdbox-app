import React from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import Bird from '../../components/svgs/Bird'
import Wave from '../../components/svgs/Wave'

import { Formik } from 'formik'

import { db, auth } from '../../firebase/Firebase'


export default function SignUp({ navigation }) {
    async function register( values ) {
        try {
            await auth.createUserWithEmailAndPassword(values.email, values.password);
            const currentUser = auth.currentUser;
        
            db.collection("users")
            .doc(currentUser.uid)
            .set({
                email: currentUser.email,
                displayName: values.displayName,
                createdAt: new Date()
            });
            navigation.replace('MainStack')
            Alert.alert("Opor!", "User Registered");
        } catch (err) {
            Alert.alert("Oops!", err.message);
        }
    }

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
                                <Text style={{ fontSize: 32, color: '#fff', fontFamily: 'Rubik_700Bold', marginRight: 6 }}>Hey, New User</Text>
                                <Wave />
                            </View>
                            <Text style={{ color: '#fff', opacity: .7, fontSize: 16, textAlign:'center', marginTop: 4, fontFamily: 'Rubik_400Regular' }}>Sign Up To Use Birdbox</Text>
                        </View>
                        <Formik
                            initialValues={{ email: '', displayName: '', password: '' }}
                            onSubmit={async (values) => {
                                register(values)
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
                                        placeholder='Enter Username'
                                        placeholderTextColor="#ffffff8a"
                                        returnKeyType='done'
                                        onChangeText={handleChange('displayName')}
                                        onBlur={handleBlur('displayName')}
                                        value={values.displayName}
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
                                            <Text style={{ color: '#557ade', fontFamily: 'Rubik_700Bold', fontSize: 18, textAlign: 'center' }}>SIGN UP</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.signupbutton} onPress={() => navigation.navigate('SignIn')}>
                                            <Text style={{ color: '#eb7a4f', fontFamily: 'Rubik_700Bold', fontSize: 18, textAlign: 'center' }}>SIGN IN</Text>
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
        fontFamily: 'Rubik_400Regular'
    }
});
