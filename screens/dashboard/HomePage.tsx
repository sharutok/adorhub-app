import React, { useState } from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    Pressable, Alert
} from "react-native";
import Yammer from "@/screens/dashboard/Yammer";
import ShortCut from "./ShortCut";
function HomeScreen() {
    return (
        <View>
            <Yammer />
            <View style={{ paddingHorizontal: 10, }}>
            <ShortCut/>
            </View>
        </View>
    )
}

export default HomeScreen;