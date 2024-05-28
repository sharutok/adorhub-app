import { StyleSheet } from "react-native";
import { Text, TextInput, View } from "react-native";
import Icon  from "react-native-vector-icons/FontAwesome5";

export default function Search() {
    return (
        <View style={{ ...styles.input, color: "black", marginHorizontal: '5%', backgroundColor:'#F2F2F2' }}>
        <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
                <Icon style={{ color:'black'}}
                name={'search'}
                size={15}
                color="grey"
                />
            <TextInput placeholder="Smart Search" ></TextInput>
        </View>
                </View>
    )
}



const styles = StyleSheet.create({
    input: {
        borderRadius: 20,
        // position: "absolute",
        // top: "20%",
        // width: "100%",
        borderColor: "white",
        borderWidth: 1,
        padding: 12,
    },
})