import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    Pressable, Alert, TouchableOpacity
} from "react-native";
import { Image } from "expo-image";
function LoadingScreen() {
    
    <View style={ styles.container}>
        <Image
            style={styles.image}
            source={require("../assets/images/PCM.png")}
            contentFit="cover"
        />
    <span style={{ fontFamily: "Brandon Grotesque" }} className='text-center font-[bolder] text-[1.5rem]'>{"Loading..."}</span>
</View>
}
const styles = StyleSheet.create({
    animation: {
        
    },
    container: {
        
    },
    image: {
        
    }
})
export default LoadingScreen