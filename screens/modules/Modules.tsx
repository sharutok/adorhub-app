import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome6';
import IconFA from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react'
import { router } from 'expo-router';
const DATA = [
    {path:"/ticket-system/actionable-ticket-list",label: 'Ticketing System', icon: 'clipboard-check'},
    { path:"/conference-booking/conference-list", label: 'Conference Booking', icon:'users-line'},
    {path:"/visitor-management/visitor-list",label: 'Visitor Management', icon: 'id-badge'},
    {path:"", label: 'Capex', icon:'file-invoice-dollar'},
];

type ItemProps = { title: string };

const Item = ({ item }: ItemProps) => {
    const [pressed,setPressed]=useState(false)
    return (
        <Pressable style={{ flexDirection: 'row',marginTop:15, alignItems: 'center', backgroundColor: pressed ? "#F1F5F9" : 'white',paddingVertical:20,borderRadius:10,marginHorizontal:20 }}
        onPressIn={() => {
            setPressed(true)
            router.push(item.path);
            }}
            onPressOut={() => {
                setPressed(false)
            }}
        >
        <View style={{width:'20%',justifyContent:'center',flexDirection:'row',}}>
        <Icon
            name={item.icon}
            style={{justifyContent:'center'}}
            size={20}
            color="grey"
            />
            </View>
        <Text style={{ ...styles.title,}}>{item.label}</Text>
    </Pressable>
        )
    }
    
    
    export default function Modules() {
        const [pressed,setPressed]=useState(false)
    return (
        <View style={{width:'100%',height:'100%',}}>
             <View >
                 <Text style={{ color: '#B1B1B1',padding:"5%",fontSize:20 }}>MODULES</Text>
             </View>
             <FlatList
                 data={DATA}
                 renderItem={({ item }) => <Item item={item} />}
                 keyExtractor={item => item.label}
                 showsVerticalScrollIndicator={false}
            />
            <View style={{width:'100%',justifyContent:'flex-end',flexDirection:'row'}}>
                <Pressable
                    onPressOut={() => {
                setPressed(false)
            }}
            onPressIn={() => {
                    setPressed(true)

                }} style={{ flexDirection: 'row', gap:10, alignItems: 'center', backgroundColor: pressed ? "#F1F5F9" : 'white', margin:'5%', padding:20,borderRadius:10}}>
            <IconFA
                name={'logout'}
                style={{justifyContent:'center'}}
                size={24}
                color="grey"
                />
                <Text>Logout</Text>
                </Pressable>
                </View>
        </View>
    )
    
}


const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    item: {
        flex:1,
        alignItems:'flex-start'
        // padding: 20,
        // marginVertical: 8,
        // marginHorizontal: 16,
    },
    title: {
        fontSize: 20,
    },
});