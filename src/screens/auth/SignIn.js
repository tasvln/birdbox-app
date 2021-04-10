import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Bird from '../../components/svgs/Bird'
import Wave from '../../components/svgs/Wave'

export default function SignIn({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.bird}>
                    <Bird />
                </View>
            </View>
            <View style={styles.content}>
                <View style={styles.headertext}>
                    <Text style={{ fontSize: 42, color: '#fff', fontFamily: 'Rubik_700Bold', marginRight: 6 }}>Hellooo</Text>
                    <Wave />
                </View>
                <Text style={{ color: '#fff', opacity: .7, fontSize: 16, textAlign:'center', marginTop: 8, fontFamily: 'Rubik_400Regular' }}>Sign In To Your Birdbox Account</Text>
            </View>
            <View style={styles.signinview}>
                <TouchableOpacity style={styles.signinbutton} onPress={() => navigation.navigate('MainStack')}>
                    <Text style={{ color: '#fff', fontFamily: 'Rubik_700Bold', fontSize: 18, textAlign: 'center' }}>SIGN IN</Text>
                </TouchableOpacity>
                <View style={styles.googlesub}>
                    <Text style={{ fontSize: 16, color: '#7e8596', fontFamily: 'Rubik_400Regular', marginRight: 4 }}>Powered By</Text>
                    <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'Rubik_400Regular' }}>Google</Text>
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
    rowtogether: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    signinview: {
        padding: 24,
    },
    signinbutton: {
        padding: 20,
        borderRadius: 9999,
        backgroundColor: '#eb7a4f'
    },
    googlesub: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    }
});
