import React, { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native'
SplashScreen.preventAutoHideAsync();

const SplashScreenWrapper = ({ children }) => {
    SplashScreen.preventAutoHideAsync();
    const [fontsLoaded] = useFonts({
        'BrandonGrotesqueLight': require('../fonts/BrandonGrotesque-Light.ttf'),
        'ArchiveRegular': require('../fonts/Archive-Regular.otf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return <View onLayout={onLayoutRootView}>{children}</View>;
};

export default SplashScreenWrapper;
