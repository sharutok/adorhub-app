import React, { useLayoutEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ShortcutLinks from './Dashboard/ShortcutLinks'
import { SafeAreaView } from 'react-native-safe-area-context'
import Yammer from './Dashboard/Yammer'
import SplashScreenWrapper from '../constants/SplashScreenWrapper'
import Header from './Dashboard/Header'
import BottomTab from './BottomTab'

const HomePage = () => {
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])
    return (
        <ScrollView style={{ backgroundColor: "white", rowGap: 20 }} >
            <Header />
            <View className='mt-5'>
                <SplashScreenWrapper >
                    <Text className="text-left" style={{ fontFamily: 'ArchiveRegular', fontSize: 30 }}>Yammer Posts</Text>
                </SplashScreenWrapper>
                <Yammer />
                <SplashScreenWrapper >
                    <Text className="text-left" style={{ fontFamily: 'ArchiveRegular', fontSize: 30 }}>Modules & Policies</Text>
                </SplashScreenWrapper>
                <ShortcutLinks />
            </View>
            {/* <BottomTab /> */}
        </ScrollView>

    )
}

export default HomePage