import { useState } from "react";
import { BackHandler, Pressable, StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, View } from '@/components/Themed';
import Search from '@/components/Reusable/Search';
import CardViewList from '@/components/Reusable/CardListView';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/helper/Api';
import ButtonNav from '@/components/Reusable/ButtonNav';
import { router } from 'expo-router';
import { Platform } from "react-native";
import axios from 'axios';
import {Abbr }from '../../../components/Reusable/Abbriviation'
import moment from "moment";
export default function ActionableTicketList() {



    const response = useQuery({
        queryKey: ['ticket-listing'],
        queryFn: async () => {
            const data = await axios.get(`${api.ticket_system.view_all_data}/?page=${1}&search=${""}&woosee=${15681}&viewonly=${true}`);
            return data?.data
        }
    })
    
    return (
        <View style={{
            ...styles.container,  }}>
            <View style={{ marginVertical: 10}}>
                <Search />
            </View>
            <CardViewList DATA={response?.data?.results} Item={Item}  />
            <View style={{ position: 'absolute', bottom: 0, width: '100%',...styles.shadowStyle, }}>
                <View style={{paddingVertical:20,marginHorizontal:20}}>
                    <ButtonNav name={"Create Ticket"} icon_name={'newspaper'} onPress={()=>router.navigate('/ticket-system/create-ticket')} />
                </View>
                </View>
        </View>
    );
}

const Item = ({ item }: any) => {
    const [pressed, setPressed] = useState(false)
    return (
        <View style={{ marginVertical: '1%', }}>
            <Pressable style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
                borderRadius: 10,
                marginHorizontal: 20,
                ...styles.card_shadowStyle,
                borderColor: '#71717A',
                backgroundColor: pressed ? "#F1F5F9" : 'white'
            }}
                onPressIn={() => {
                    setPressed(true)
                    // router.navigate('/ticket-system/actionable-ticket-list');
                    console.log(item);
                }}
                onPressOut={() => {
                    setPressed(false)
                }}
            >
                <View style={{ flexDirection: 'column', paddingHorizontal: 10, borderLeftWidth: 4, borderRadius: 10, borderLeftColor:'#E1BC23', }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%',marginVertical:10 }}>
                        <View>
                        <Text style={{ ...styles.card_title, }}>{"Ticket ID"}</Text>
                            <Text style={{ ...styles.card_value,fontWeight:'bold',fontSize:24 }}>{item.ticket_no}</Text>
                        </View>
                        <View>                            
                        <Text style={{ ...styles.card_title,textAlign:'right' }}>{"Raised At"}</Text>
                            <Text style={{ ...styles.card_value, textAlign: 'right' }}>{moment(item.created_at,"DD-MM-YYYY hh:mm a").format("DD/MM/YYYY")}</Text>
                        </View>
                    </View>
                    <View style={{ borderBottomColor:'#D1D3D9',borderBottomWidth:1}}></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginVertical: 10 }} >
                        <View>
                    <Text style={{ ...styles.card_title, }}>{"Title"}</Text>
                            <Text style={{ ...styles.card_value, }}>{Abbr(item.tkt_title)}</Text>
                        </View>
                        <View >
                    <Text style={{ ...styles.card_title,textAlign:'right' }}>{"Requester"}</Text>
                            <Text style={{ ...styles.card_value,textAlign:'right' }}>{item.requester_emp_name}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }} >
                        <View>
                    <Text style={{ ...styles.card_title, }}>{"Requirement Type"}</Text>
                            <Text style={{ ...styles.card_value, }}>{item.tkt_type}</Text>
                        </View>                 
                        <View >
                    <Text style={{ ...styles.card_title,textAlign:'right' }}>{"Currently At"}</Text>
                            <Text style={{ ...styles.card_value, textAlign: 'right' }}>{item.tkt_current_at}</Text>
                        </View>   
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                        <MaterialCommunityIcons name={'attachment'} size={25} color="#4880C2" />
                            </View>
                </View>
            </Pressable>
        </View>
    )
}

function status(val:String) {
    if (val === "INPROGRESS") {
        return (<Text style={{ fontWeight: '700', color: 'rgb(234 179 8)' }}>{val}</Text>)
    }
    if (val === "APPROVED") {
        return (<Text style={{ fontWeight: '700', color: 'rgb(34 197 94)' }}>{val}</Text>)
    }
    if (val === "CLOSED") {
        return (<Text style={{ fontWeight: '700', color: 'rgb(59 130 246)' }}>{val}</Text>)
    }
    if (val === "REJECTED") {
        return (<Text style={{ fontWeight: '700', color: 'rgb(239 68 68)' }}>{val}</Text>)
    }
    else {
        return "-"
    }
}

const styles = StyleSheet.create({
    card_title: {
        fontSize: 14,
        color:'#808285'
    },
    card_value: {
        fontSize: 16,
        color: '#3D3D3D',
        fontWeight:'500'
    },

    searchShadowStyle : {
        shadowColor: 'rgba(50,50,93,0.25)',
        shadowOffset: {
            width: 0, 
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 0,
    },
    container: {
        backgroundColor: 'white',
        width: '100%',
        height:'100%',
        // flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    shadowStyle :{
        shadowColor: 'rgba(50,50,93,0.25)', // Shadow color
        shadowOffset: {
            width: 0,  // Horizontal offset
            height: -2, // Vertical offset (negative value to move the shadow upwards)
        },
        shadowOpacity: 1, // Opacity (0 to 1)
        shadowRadius: 5, // Spread or blur radius
        elevation: 5, // Only for Android (set to 0 to prevent default shadow)
    },
    card_shadowStyle: {

        
        // ...Platform.select({
        //     ios: {
        //         shadowColor: 'rgba(50,50,93,0.25)',
        //         shadowOffset: {
        //             width: 0,
        //             height: 2,
        //         },
        //         shadowOpacity: 1,
        //         shadowRadius: 5,
        //     },
        //     android: {
        //         elevation: 2,
        //     },
        // })
    }       
});
