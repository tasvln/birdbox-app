import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import { GiftedChat } from 'react-native-gifted-chat'

export default function Space({ navigation }) {
    const [messages, setMessages] = useState([]);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#272B34'  }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ flex: 1 }}>
                        <View style={styles.content}>
                            <View style={styles.topbar}>
                                <TouchableOpacity style={styles.backbutton} onPress={() => navigation.navigate('Spaces')}>
                                    <Feather name="arrow-left" size={24} color="#aeb0b4" />
                                </TouchableOpacity>
                                <View>
                                    <Text style={styles.spacetitle}>Tree House</Text>
                                    <View style={styles.spacetitlesub}>
                                        <Text style={styles.detsnumbers}>8 Members,</Text>
                                        <Text style={styles.detsnumbers}>4 Online</Text>
                                    </View>
                                </View>
                                <View style={styles.leftside}>
                                    <TouchableOpacity style={styles.moreinfobutton} onPress={() => navigation.navigate('Info')}>
                                        <Feather name="info" size={24} color="#aeb0b4" />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.exitbutton}>
                                        <Feather name="log-out" size={24} color="#EF4444" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View>
                                <ScrollView>

                                </ScrollView>
                            </View>
                        </View>
                        <View style={styles.inputview}>
                            {/* <GiftedChat
                                messages={messages}
                                onSend={messages => onSend(messages)}
                                user={{
                                    _id: 1,
                                }}
                            /> */}
                            {/* <TextInput
                                style={styles.input}
                                placeholder= 'Type Message'
                                placeholderTextColor="#ffffff8a"
                                returnKeyType='send'
                            />
                            <TouchableOpacity style={styles.sendbutton}>
                                <Feather name="arrow-up" size={24} color="#eb7a4f" />
                            </TouchableOpacity> */}
                        </View>
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
        flex: 1,
        padding: 24
    },
    topbar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        paddingBottom: 16,
        borderBottomColor: '#343943'
    },
    backbutton: {
        backgroundColor: '#343943',
        padding: 10,
        marginRight: 12,
        borderRadius: 8
    },
    spacetitle: {
        color: '#fff',
        fontFamily: 'Rubik_700Bold',
        fontSize: 20
    },
    spacetitlesub: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    moreinfobutton: {
        backgroundColor: '#343943',
        padding: 10,
        marginRight: 8,
        borderRadius: 8
    },
    exitbutton: {
        backgroundColor: '#EF44441a',
        padding: 10,
        borderRadius: 8
    },
    detsnumbers: {
        fontSize: 14,
        fontFamily: 'Rubik_400Regular',
        color: '#fff',
        opacity: .5,
        marginRight: 6
    },
    leftside: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto'
    },
    inputview: {
        padding: 24,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 9999,
        backgroundColor: '#373d49',
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Rubik_400Regular',
        width: 270,
        marginRight: 8
    },
    sendbutton: {
        backgroundColor: '#eb7a4f1a',
        padding: 10,
        borderRadius: 9999
    },
})
