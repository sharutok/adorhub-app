import { Pressable, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import { View } from "react-native";

export default function LoadingButton({onPress}){
    return (
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', borderWidth: 1, borderRadius: 10, paddingVertical: 15, backgroundColor: '#626262', borderColor: 'white' }} onPress={onPress} disabled={false}>
            <View >
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, }}  >
            {/* <ActivityIndicator color='white'/> */}
                <Text style={{color:'white'}}>
                Submit
            </Text>
            </View>
            </View>
    </TouchableOpacity>
)
}