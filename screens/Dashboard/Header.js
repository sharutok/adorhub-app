import { View, Text, StyleSheet, Dimensions, Image, } from 'react-native'
const { width, height } = Dimensions.get('window');
import React, { useLayoutEffect, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import SplashScreenWrapper from '../../constants/SplashScreenWrapper';


const Header = () => {
    const navigation = useNavigation()
    const image = { uri: "https://adorwelding.org/Adorhub_uploads/bile-login-bg.png" };

    return (
        <View style={[styles.container, styles.card, styles.shadowProp]}>
            <View style={styles.header}>
                <MaterialIcons name="menu" size={24} color="black" />
                <View style={styles.logo}>
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
                            <Text style={{ fontFamily: 'ArchiveRegular', fontSize: 20 }}>ADOR</Text>
                            <Text style={{ fontFamily: 'ArchiveRegular', color: "#DC2626", fontSize: 20 }}>HUB</Text>
                        </View>
                    </SplashScreenWrapper>
                </View>
                <Fontisto name="bell" size={24} color="black" />
            </View>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

    tinyLogo: {
        width: 40,
        height: 40,
    },

    container: {
        display: "flex",
        gap: 20,
    },
    adorhub: {
        flexDirection: "row",
    },
    adorhubElements: {
        fontSize: 20
    },
    logo: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    header: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: 10,
    },
});
