import React from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'

export default function Info({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.content}>
                    <View style={styles.you}>
                        <View style={styles.userppview}>
                            <View style={styles.userpp}>
                                <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'Rubik_500Medium' }}>D</Text>
                            </View>
                            <View style={styles.activity}></View>
                        </View>
                        <View>
                            <Text style={{ fontSize: 24, color: '#fff', fontFamily: 'Rubik_700Bold' }}>DevNinja</Text>
                            <View style={styles.namegenview}>
                                <Text style={{ fontSize: 18, fontFamily: 'Rubik_400Regular', color: '#919398', marginRight: 5 }}>Temitope Adebayo</Text>
                                <MaterialCommunityIcons name="gender-male" size={24} color="#6a7488" />
                            </View>
                        </View>
                        <View style={styles.leftside}>
                            <TouchableOpacity style={styles.backbutton} onPress={() => navigation.goBack()}>
                                <Feather name="chevron-down" size={24} color="#aeb0b4" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <ScrollView>
                            <TextInput
                                style={styles.input}
                                placeholder='Search Users'
                                placeholderTextColor="#ffffff8a"
                                returnKeyType='done'
                            />
                            <View style={styles.users}>
                                <View style={styles.userppview}>
                                    <View style={styles.userpp}>
                                        <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'Rubik_500Medium' }}>D</Text>
                                    </View>
                                    <View style={styles.activity}></View>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 24, color: '#fff', fontFamily: 'Rubik_700Bold' }}>DevNinja</Text>
                                    <View style={styles.namegenview}>
                                        <Text style={{ fontSize: 18, fontFamily: 'Rubik_400Regular', color: '#919398', marginRight: 5 }}>Temitope Adebayo</Text>
                                        <MaterialCommunityIcons name="gender-male" size={24} color="#6a7488" />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.users}>
                                <View style={styles.userppview}>
                                    <View style={styles.userpp}>
                                        <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'Rubik_500Medium' }}>D</Text>
                                    </View>
                                    <View style={styles.activity}></View>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 24, color: '#fff', fontFamily: 'Rubik_700Bold' }}>DevNinja</Text>
                                    <View style={styles.namegenview}>
                                        <Text style={{ fontSize: 18, fontFamily: 'Rubik_400Regular', color: '#919398', marginRight: 5 }}>Temitope Adebayo</Text>
                                        <MaterialCommunityIcons name="gender-male" size={24} color="#6a7488" />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.users}>
                                <View style={styles.userppview}>
                                    <View style={styles.userpp}>
                                        <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'Rubik_500Medium' }}>D</Text>
                                    </View>
                                    <View style={styles.activity}></View>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 24, color: '#fff', fontFamily: 'Rubik_700Bold' }}>DevNinja</Text>
                                    <View style={styles.namegenview}>
                                        <Text style={{ fontSize: 18, fontFamily: 'Rubik_400Regular', color: '#919398', marginRight: 5 }}>Temitope Adebayo</Text>
                                        <MaterialCommunityIcons name="gender-male" size={24} color="#6a7488" />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.users}>
                                <View style={styles.userppview}>
                                    <View style={styles.userpp}>
                                        <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'Rubik_500Medium' }}>D</Text>
                                    </View>
                                    <View style={styles.activity}></View>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 24, color: '#fff', fontFamily: 'Rubik_700Bold' }}>DevNinja</Text>
                                    <View style={styles.namegenview}>
                                        <Text style={{ fontSize: 18, fontFamily: 'Rubik_400Regular', color: '#919398', marginRight: 5 }}>Temitope Adebayo</Text>
                                        <MaterialCommunityIcons name="gender-male" size={24} color="#6a7488" />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.users}>
                                <View style={styles.userppview}>
                                    <View style={styles.userpp}>
                                        <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'Rubik_500Medium' }}>D</Text>
                                    </View>
                                    <View style={styles.activity}></View>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 24, color: '#fff', fontFamily: 'Rubik_700Bold' }}>DevNinja</Text>
                                    <View style={styles.namegenview}>
                                        <Text style={{ fontSize: 18, fontFamily: 'Rubik_400Regular', color: '#919398', marginRight: 5 }}>Temitope Adebayo</Text>
                                        <MaterialCommunityIcons name="gender-male" size={24} color="#6a7488" />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.users}>
                                <View style={styles.userppview}>
                                    <View style={styles.userpp}>
                                        <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'Rubik_500Medium' }}>D</Text>
                                    </View>
                                    <View style={styles.activity}></View>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 24, color: '#fff', fontFamily: 'Rubik_700Bold' }}>DevNinja</Text>
                                    <View style={styles.namegenview}>
                                        <Text style={{ fontSize: 18, fontFamily: 'Rubik_400Regular', color: '#919398', marginRight: 5 }}>Temitope Adebayo</Text>
                                        <MaterialCommunityIcons name="gender-male" size={24} color="#6a7488" />
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </TouchableWithoutFeedback>
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
        alignItems: 'center',
        borderBottomWidth: 1,
        paddingBottom: 16,
        borderBottomColor: '#343943'
    },
    users: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
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
    input: {
        padding: 20,
        borderRadius: 9999,
        backgroundColor: '#373d49',
        marginBottom: 24,
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Rubik_400Regular'
    },
    leftside: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto'
    },
    backbutton: {
        backgroundColor: '#343943',
        padding: 10,
        borderRadius: 8
    },
})
