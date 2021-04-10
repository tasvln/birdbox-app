import React from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Bird from '../../components/svgs/Bird'
import NewBird from '../../components/svgs/NewBird'

export default function Create({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.content}>
                        <View style={styles.bird}>
                            <Bird />
                        </View>
                        <View style={styles.content}>
                            <View style={styles.headertext}>
                                <Text style={{ fontSize: 42, color: '#fff', fontFamily: 'Rubik_700Bold', marginRight: 6 }}>Create Space</Text>
                                <NewBird />
                            </View>
                            <Text style={{ color: '#fff', opacity: .7, fontSize: 16, textAlign:'center', marginTop: 8, fontFamily: 'Rubik_400Regular' }}>Just a topic for your space and zoom</Text>
                        </View>
                        <View>
                            <TextInput
                                style={styles.input}
                                placeholder='Name your space'
                                placeholderTextColor="#ffffff8a"
                                returnKeyType='done'
                            />
                            <TouchableOpacity style={styles.createbutton} onPress={() => navigation.navigate('MainStack')}>
                                <Text style={{ color: '#fff', fontFamily: 'Rubik_700Bold', fontSize: 18, textAlign: 'center' }}>CREATE</Text>
                            </TouchableOpacity>
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
        padding: 24,
        flex: 1
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
    createbutton: {
        padding: 20,
        borderRadius: 9999,
        backgroundColor: '#eb7a4f'
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
