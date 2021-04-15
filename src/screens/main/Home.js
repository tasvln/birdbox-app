import React, { useState, useEffect } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, TouchableWithoutFeedback, Image, FlatList, Pressable } from 'react-native'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import Modal from 'react-native-modal'
import axios from 'axios'

// SVGs
import Bird from '../../components/svgs/Bird'

import { io } from "socket.io-client";

function seperateItem() {
    return (
        <View style={{ margin: 20 }}>
        </View>
    )
}

export default function Home({ navigation }) {
    // const [isModalVisible, setModalVisible] = useState(false);
    const [spaces, setSpaces] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    // const toggleModal = () => {
    //     setModalVisible(!isModalVisible);
    // };

    useEffect(() => {
        const socket = io("https://birdbox-app.herokuapp.com", { jsonp: false });
        socket.on("connect", () => {
            console.log(socket.connected); // true
        });

        socket.on("allSpaces", (spaces) => {
            setSpaces(spaces)
        });

        socket.on("disconnect", () => {
            console.log(socket.connected); // false
        });

    }, []);

    async function getData() {
        try {
            // console.log(spaces)
            // setIsLoading(false)
            return console.log(spaces)
        } catch {
            console.log(err)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.bird}>
                    <Bird />
                </View>
                <Text onPress={getData}>Omo</Text>
                {/* {isLoading ? <Text >Loading...</Text> : <View style={{ marginTop: 40 }}>
                    <Text style={{ marginBottom: 20, color: '#fff', fontFamily: 'Rubik_700Bold', fontSize: 32 }}>Spaces</Text>
                    <FlatList
                        data={getData}
                        ItemSeparatorComponent={seperateItem}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            console.log(item);
                            return (
                                <TouchableWithoutFeedback>
                                    <View style={styles.spacecard}>
                                        <Text style={styles.spacetitle}>{item.space}</Text>
                                        <Text style={styles.spacemembers}>Allen, Allen, Allen, Allen, Allen, Allen ... </Text>
                                        <View style={{ marginTop: 42 }}>
                                            <View style={styles.spacecarddets}>
                                                <Feather name="users" size={24} color="#eb7a4f" />
                                                <Text style={styles.detsnumbers}>99 Members</Text>
                                            </View>
                                            <View style={styles.spacesub}>
                                                <View style={styles.spacecarddets}>
                                                    <MaterialCommunityIcons name="gender-male" size={24} color="#557ade" />
                                                    <Text style={styles.detsnumbers}>{item.males}</Text>
                                                </View>
                                                <View style={styles.spacecarddets}>
                                                    <MaterialCommunityIcons name="gender-female" size={24} color="#f2507b" />
                                                    <Text style={styles.detsnumbers}>{item.females}</Text>
                                                </View>
                                                <View style={styles.spacecarddets}>
                                                    <MaterialCommunityIcons name="gender-male-female" size={24} color="#9764c9" />
                                                    <Text style={styles.detsnumbers}>{item.nonBinary}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        }}
                    />
                </View>} */}
            </View>
            {/* <Modal isVisible={isModalVisible} style={{ margin: 0, justifyContent: 'flex-end' }} swipeDirection="down" onSwipeComplete={toggleModal}>
                    <View style={styles.modal}>
                        <View style={{ height: '50%', backgroundColor: '#343943' }}>
                            <View style={{ marginBottom: 40 }}>
                                <Text style={{ fontSize: 32, fontFamily: 'Rubik_700Bold', color: '#fff', textAlign: 'center' }}>Join Tree House Chat?</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={{ padding: 16, backgroundColor: '#10B9811a', borderRadius: 20, marginBottom: 10 }} onPress={() => navigation.navigate('Space')}>
                                    <Text style={{ textAlign: 'center', fontSize: 20, fontFamily: 'Rubik_500Medium', color: '#10B981' }}>Yes</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ padding: 16, backgroundColor: '#EF44441a', borderRadius: 20, marginBottom: 20 }} onPress={toggleModal}>
                                    <Text style={{ textAlign: 'center', fontSize: 20, fontFamily: 'Rubik_500Medium', color: '#EF4444' }}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal> */}
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
    spacecard: {
        padding: 32,
        backgroundColor: 'rgba(55,61,73,.38823529411764707)',
        borderRadius: 20,
        marginBottom: 24
    },
    spacetitle: {
        color: '#fff',
        fontFamily: 'Rubik_700Bold',
        fontSize: 26
    },
    spacemembers: {
        fontSize: 18,
        fontFamily: 'Rubik_400Regular',
        marginTop: 24,
        color: '#fff',
        opacity: .5
    },
    spacesub: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 18,
        alignItems: 'center'
    },
    spacecarddets: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16
    },
    detsnumbers: {
        fontSize: 18,
        fontFamily: 'Rubik_400Regular',
        color: '#fff',
        opacity: .5,
        marginLeft: 6
    },
    modal: {
        backgroundColor: '#343943',
        padding: 32,
        borderRadius: 0,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    }
});
