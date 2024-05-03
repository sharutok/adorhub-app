import React from "react";
import {
    Pressable,
    StyleSheet,
    Text,
    View
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome6';
const icons = [
    {icon_name:'users-line',title:'Book Conference',},
    {icon_name:'clipboard-check',title:'Raise Ticket',},
    {icon_name:'id-badge',title:'Add Visitor'}
]


function ShortCut() {

    return (
        <View style={{...styles.shadowStyle, backgroundColor:'white',borderRadius:10,justifyContent:'center'}}>
            <View style={{ flexDirection:'row',justifyContent:'space-between',margin:10}}>
                {icons.map((x,i) => {
                    return (
                        <View key={i} >
                            <Pressable style={{ alignItems: 'center', gap: 5 }} onPress={() => { console.log(x.icon_name), vibrate() }}>
                            <Icon name={`${x.icon_name}`} size={36} color="red" />
                            <Text style={{fontWeight:'500'}}>{x.title}</Text>
                            </Pressable>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    shadowStyle: {
        shadowColor: 'rgba(50,50,93,0.25)', // Shadow color
        shadowOffset: {
            width: 0,  // Horizontal offset
            height: 2, // Vertical offset
        },
        shadowOpacity: 1, // Opacity (0 to 1)
        shadowRadius: 5, // Spread or blur radius
        elevation: -1, // Only for Android (positive value)
    },
});




export default ShortCut