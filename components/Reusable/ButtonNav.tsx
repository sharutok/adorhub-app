import { useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { Pressable } from "react-native";
import { router } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome6';

export default function ButtonNav({ name,icon_name,onPress }) {

    const [submittedData, setSubmittedData] = useState(null);

     return (
         <Pressable
             style={{...styles.submit_btn,alignItems:'center',flexDirection:'row',justifyContent:'center',gap:10}}
             onPress={onPress}>
             <Icon
                 name={icon_name}
                 size={20}
                 color="white"
             />
             <Text
                 style={{
                     color: "white",
                     fontWeight: "700",
                     textAlign: "center",
                     zIndex: 10,
                 }}>
                 { name}
             </Text>
         </Pressable>
)
}


const styles = StyleSheet.create({
    submit_btn: {
        width: "100%",
        padding: 10,
        borderRadius: 10,
        zIndex: 10,
        backgroundColor: "#555259",
    },

})