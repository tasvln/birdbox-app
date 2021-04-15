import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, Alert } from 'react-native'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'

import { auth } from '../../firebase/Firebase'
import firebase from 'firebase'


export default function Settings({ navigation }) {
    let currentUserUID = firebase.auth().currentUser.uid;
    const [displayName, setdisplayName] = useState('');

    async function signOut() {
        try {
          await auth.signOut();
          navigation.replace('SignIn')
          Alert.alert("Byeee", "See you soon!");
        } catch (err) {
          Alert.alert('Ooops!', err.message);
        }
    }

    useEffect(() => {
        async function getUserInfo(){
          let doc = await firebase
          .firestore()
          .collection('users')
          .doc(currentUserUID)
          .get();
    
          if (!doc.exists){
            Alert.alert('No user data found!')
          } else {
            let dataObj = doc.data();
            setdisplayName(dataObj.displayName)
          }
        }
        getUserInfo();
    })


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.you}>
                    <View style={styles.userppview}>
                        <View style={styles.userpp}>
                            <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'Rubik_500Medium' }}>{displayName.substring(0,1).toUpperCase()}</Text>
                        </View>
                        <View style={styles.activity}></View>
                    </View>
                    <View>
                        <Text style={{ fontSize: 24, color: '#fff', fontFamily: 'Rubik_700Bold' }}>{displayName}</Text>
                        {/* <View style={styles.namegenview}>
                            <MaterialCommunityIcons name="gender-male" size={24} color="#6a7488" />
                        </View> */}
                    </View>
                </View>
                <View style={{ marginTop: 30 }}>
                    <View style={{ marginBottom: 30 }}>
                        <Text style={{ fontSize: 16, fontFamily: 'Rubik_500Medium', marginBottom: 14, opacity: 0.4, color: '#fff' }}>Account</Text>
                        <View style={styles.optionscard}>
                            <TouchableOpacity style={{ padding: 16, borderBottomWidth: 1.5, borderBottomColor: '#343943'}} onPress={() => Alert.alert('Working On It !')}>
                                <Text style={{ fontFamily: 'Rubik_500Medium', fontSize: 18, color: '#fff' }}>Change Username</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ padding: 16 }}>
                                <Text style={{ fontFamily: 'Rubik_500Medium', fontSize: 18, color: '#EF4444' }} onPress={signOut}>Sign Out</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginBottom: 30 }}>
                        <Text style={{ fontSize: 16, fontFamily: 'Rubik_500Medium', marginBottom: 14, opacity: 0.4, color: '#fff' }}>Sponsor</Text>
                        <View style={styles.optionscard}>
                            <TouchableOpacity style={{ padding: 16, borderBottomWidth: 1.5, borderBottomColor: '#343943'}}>
                                <Text style={{ fontFamily: 'Rubik_500Medium', fontSize: 18, color: '#fff' }}>Rate App</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ padding: 16 }}>
                                <Text style={{ fontFamily: 'Rubik_500Medium', fontSize: 18, color: '#fff' }}>Send Funds For Support</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
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
        flex: 1
    },
    you: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    userppview: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',
        marginRight: 12,
    },
    userpp: {
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#557ade',
        borderRadius: 16
    },
    activity: {
        padding: 6,
        backgroundColor: '#61d258',
        borderRadius: 9999,
        position: 'absolute',
        bottom: 0,
        marginLeft: 44,
    },
    namegenview: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2
    },
    optionscard: {
        backgroundColor: 'rgba(55,61,73,.38823529411764707)',
        borderRadius: 20,
        padding: 10
    }
})
