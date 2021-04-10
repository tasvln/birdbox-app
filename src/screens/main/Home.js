import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'

// SVGs
import Bird from '../../components/svgs/Bird'

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.content}>
            <View style={styles.bird}>
                <Bird />
            </View>
            <View style={{ marginTop: 40 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={{ marginBottom: 20, color: '#fff', fontFamily: 'Rubik_700Bold', fontSize: 32 }}>Spaces</Text>
                    <View style={styles.spacecard}>
                        <Text style={styles.spacetitle}>Tree House</Text>
                        <Text style={styles.spacemembers}>Allen, Allen, Allen, Allen, Allen, Allen ... </Text>
                        <View style={{ marginTop: 42 }}>
                            <View style={styles.spacecarddets}>
                                <Feather name="users" size={24} color="#eb7a4f" />
                                <Text style={styles.detsnumbers}>99 Members</Text>
                            </View>
                            <View style={styles.spacesub}>
                                <View style={styles.spacecarddets}>
                                    <MaterialCommunityIcons name="gender-male" size={24} color="#557ade" />
                                    <Text style={styles.detsnumbers}>99</Text>
                                </View>
                                <View style={styles.spacecarddets}>
                                    <MaterialCommunityIcons name="gender-female" size={24} color="#f2507b" />
                                    <Text style={styles.detsnumbers}>99</Text>
                                </View>
                                <View style={styles.spacecarddets}>
                                    <MaterialCommunityIcons name="gender-male-female" size={24} color="#9764c9" />
                                    <Text style={styles.detsnumbers}>99</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.spacecard}>
                        <Text style={styles.spacetitle}>Tree House</Text>
                        <Text style={styles.spacemembers}>Allen, Allen, Allen, Allen, Allen, Allen ... </Text>
                        <View style={{ marginTop: 42 }}>
                            <View style={styles.spacecarddets}>
                                <Feather name="users" size={24} color="#eb7a4f" />
                                <Text style={styles.detsnumbers}>99 Members</Text>
                            </View>
                            <View style={styles.spacesub}>
                                <View style={styles.spacecarddets}>
                                    <MaterialCommunityIcons name="gender-male" size={24} color="#557ade" />
                                    <Text style={styles.detsnumbers}>99</Text>
                                </View>
                                <View style={styles.spacecarddets}>
                                    <MaterialCommunityIcons name="gender-female" size={24} color="#f2507b" />
                                    <Text style={styles.detsnumbers}>99</Text>
                                </View>
                                <View style={styles.spacecarddets}>
                                    <MaterialCommunityIcons name="gender-male-female" size={24} color="#9764c9" />
                                    <Text style={styles.detsnumbers}>99</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.spacecard}>
                        <Text style={styles.spacetitle}>Tree House</Text>
                        <Text style={styles.spacemembers}>Allen, Allen, Allen, Allen, Allen, Allen ... </Text>
                        <View style={{ marginTop: 42 }}>
                            <View style={styles.spacecarddets}>
                                <Feather name="users" size={24} color="#eb7a4f" />
                                <Text style={styles.detsnumbers}>99 Members</Text>
                            </View>
                            <View style={styles.spacesub}>
                                <View style={styles.spacecarddets}>
                                    <MaterialCommunityIcons name="gender-male" size={24} color="#557ade" />
                                    <Text style={styles.detsnumbers}>99</Text>
                                </View>
                                <View style={styles.spacecarddets}>
                                    <MaterialCommunityIcons name="gender-female" size={24} color="#f2507b" />
                                    <Text style={styles.detsnumbers}>99</Text>
                                </View>
                                <View style={styles.spacecarddets}>
                                    <MaterialCommunityIcons name="gender-male-female" size={24} color="#9764c9" />
                                    <Text style={styles.detsnumbers}>99</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.spacecard}>
                        <Text style={styles.spacetitle}>Tree House</Text>
                        <Text style={styles.spacemembers}>Allen, Allen, Allen, Allen, Allen, Allen ... </Text>
                        <View style={{ marginTop: 42 }}>
                            <View style={styles.spacecarddets}>
                                <Feather name="users" size={24} color="#eb7a4f" />
                                <Text style={styles.detsnumbers}>99 Members</Text>
                            </View>
                            <View style={styles.spacesub}>
                                <View style={styles.spacecarddets}>
                                    <MaterialCommunityIcons name="gender-male" size={24} color="#557ade" />
                                    <Text style={styles.detsnumbers}>99</Text>
                                </View>
                                <View style={styles.spacecarddets}>
                                    <MaterialCommunityIcons name="gender-female" size={24} color="#f2507b" />
                                    <Text style={styles.detsnumbers}>99</Text>
                                </View>
                                <View style={styles.spacecarddets}>
                                    <MaterialCommunityIcons name="gender-male-female" size={24} color="#9764c9" />
                                    <Text style={styles.detsnumbers}>99</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.spacecard}>
                        <Text style={styles.spacetitle}>Tree House</Text>
                        <Text style={styles.spacemembers}>Allen, Allen, Allen, Allen, Allen, Allen ... </Text>
                        <View style={{ marginTop: 42 }}>
                            <View style={styles.spacecarddets}>
                                <Feather name="users" size={24} color="#eb7a4f" />
                                <Text style={styles.detsnumbers}>99 Members</Text>
                            </View>
                            <View style={styles.spacesub}>
                                <View style={styles.spacecarddets}>
                                    <MaterialCommunityIcons name="gender-male" size={24} color="#557ade" />
                                    <Text style={styles.detsnumbers}>99</Text>
                                </View>
                                <View style={styles.spacecarddets}>
                                    <MaterialCommunityIcons name="gender-female" size={24} color="#f2507b" />
                                    <Text style={styles.detsnumbers}>99</Text>
                                </View>
                                <View style={styles.spacecarddets}>
                                    <MaterialCommunityIcons name="gender-male-female" size={24} color="#9764c9" />
                                    <Text style={styles.detsnumbers}>99</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.spacecard}>
                        <Text style={styles.spacetitle}>Tree House</Text>
                        <Text style={styles.spacemembers}>Allen, Allen, Allen, Allen, Allen, Allen ... </Text>
                        <View style={{ marginTop: 42 }}>
                            <View style={styles.spacecarddets}>
                                <Feather name="users" size={24} color="#eb7a4f" />
                                <Text style={styles.detsnumbers}>99 Members</Text>
                            </View>
                            <View style={styles.spacesub}>
                                <View style={styles.spacecarddets}>
                                    <MaterialCommunityIcons name="gender-male" size={24} color="#557ade" />
                                    <Text style={styles.detsnumbers}>99</Text>
                                </View>
                                <View style={styles.spacecarddets}>
                                    <MaterialCommunityIcons name="gender-female" size={24} color="#f2507b" />
                                    <Text style={styles.detsnumbers}>99</Text>
                                </View>
                                <View style={styles.spacecarddets}>
                                    <MaterialCommunityIcons name="gender-male-female" size={24} color="#9764c9" />
                                    <Text style={styles.detsnumbers}>99</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
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
    }
});
