import { View, Text, SafeAreaView, TextInput, StyleSheet, Dimensions, Image, TouchableOpacity, ImageBackground, Platform } from 'react-native'
const { width, height } = Dimensions.get('window');
import React, { useLayoutEffect, useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'
import moment from 'moment'
import SplashScreenWrapper from '../constants/SplashScreenWrapper';



export default function LoginPage() {
    const navigation = useNavigation()
    const image = { uri: "https://adorwelding.org/Adorhub_uploads/bile-login-bg.png" };


    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    const prefix_email_id = [
        "@adorians.com",
        "@adorfontech.com",
        "@flashorthodontics.in",
    ];

    function handleOnChange() {

    }

    return (
        <SafeAreaView style={{ width: "100%", height: "100%", paddingTop: Platform.OS === 'android' ? height / 5 : 0, backgroundColor: "#FFF" }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View>
                        <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: 'https://adorwelding.org/Adorhub_uploads/PCM.png',
                            }}
                        />
                    </View>
                    <Text style={{ borderColor: "black", borderWidth: 1, backgroundColor: "black", borderRadius: 10 }}></Text>
                    <SplashScreenWrapper >
                        <View style={styles.adorhub}>
                            <Text style={{ fontFamily: 'ArchiveRegular', fontSize: 40 }}>ADOR</Text>
                            <Text style={{ fontFamily: 'ArchiveRegular', color: "#DC2626", fontSize: 40 }}>HUB</Text>
                        </View>
                    </SplashScreenWrapper>
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                    <Text style={{ fontSize: 16 }}>Email Address</Text>
                    <View style={{ flexDirection: "row" }}>
                        <View>
                            <TextInput
                                style={{
                                    width: width / 1.9, borderWidth: 1,
                                    padding: 10,
                                    borderColor: "#adb5bd",
                                    fontSize: 16,
                                    borderRadius: 2,
                                }}
                                placeholder='Enter your email id'
                            />
                        </View>
                        <View>
                            <SelectDropdown
                                data={prefix_email_id}
                                defaultValueByIndex={0}
                                onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index);
                                }}
                                defaultButtonText={'Select country'}
                                buttonTextAfterSelection={(selectedItem, index) => {
                                    return selectedItem;
                                }}
                                rowTextForSelection={(item, index) => {
                                    return item;
                                }}
                                buttonStyle={styles.dropdown1BtnStyle}
                                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                                renderDropdownIcon={isOpened => {
                                    return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                                }}
                                dropdownIconPosition={'right'}
                                dropdownStyle={styles.dropdown1DropdownStyle}
                                rowStyle={styles.dropdown1RowStyle}
                                rowTextStyle={styles.dropdown1RowTxtStyle}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                    <Text style={{ fontSize: 16 }} >Password</Text>
                    <TextInput
                        secureTextEntry={true}
                        style={{
                            borderWidth: 1,
                            padding: 10,
                            borderColor: "#adb5bd",
                            fontSize: 16,
                            borderRadius: 2,
                        }}
                        placeholder='Password'
                    />
                </View>
                <Text style={styles.label}>Forgot password? Contact ADORHUB Admin</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate("HomePage")
                    }}
                >
                    <Text style={styles.signButton}>SIGN IN</Text>
                </TouchableOpacity>
                <Text style={styles.label1}>{moment().format("YYYY")} adorwelding.com</Text>
            </View>
            <Image
                style={styles.footerimage}
                source={image}
            />
        </SafeAreaView >
    )
}




const styles = StyleSheet.create({

    footerimage: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    container: {
        display: "flex",
        gap: 20,
    },
    input: {
        height: 40,
        width: '100%',
        borderWidth: 1,
        padding: 8,
        fontSize: 16,
        borderColor: "#adb5bd",
        borderRadius: 2,

    },
    button: {
        backgroundColor: "#555259",
        borderRadius: 3,
        padding: 10,
        margin: 10
    },
    text: {
        marginHorizontal: 10
    },
    signButton: {
        color: 'white',
        textAlign: "center"
    },
    label: {
        textAlign: "center",
        color: "#868E96",
        fontSize: 14,
        textDecorationLine: "underline"
    },
    label1: {
        textAlign: "center",
        color: "#333533",
        fontSize: 16
    },
    adorhub: {
        flexDirection: "row",
    },
    adorhubElements: {
        fontSize: 20
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 10,
    },
    header: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    headerTitle: { color: '#000', fontWeight: 'bold', fontSize: 16 },
    saveAreaViewContainer: { flex: 1, backgroundColor: '#FFF' },
    viewContainer: { flex: 1, width, backgroundColor: '#FFF' },


    dropdown1BtnStyle: {
        width: '50%',
        borderRadius: 3,
        borderWidth: 1,
        backgroundColor: "#FFF",
        borderColor: '#adb5bd',
    },
    dropdown1BtnTxtStyle: { color: '#444', textAlign: 'left', fontSize: 16 },
    dropdown1DropdownStyle: { backgroundColor: '#EFEFEF', },
    dropdown1RowStyle: { backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5' },
    dropdown1RowTxtStyle: { color: '#444', textAlign: 'left', fontSize: 16 },


});

