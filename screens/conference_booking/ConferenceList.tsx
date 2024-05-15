import { useState } from "react";
import { BackHandler, Pressable, StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Search from '@/components/Reusable/Search';
import CardViewList from '@/components/Reusable/CardListView';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/helper/Api';
import ButtonNav from '@/components/Reusable/ButtonNav';
import { router } from 'expo-router';
import { Platform } from "react-native";
import axios from 'axios';
import moment from "moment";

export default function ConferenceList() {
    const response = useQuery({
        queryKey: ['conference-listing'],
        queryFn: async () => {
            const data =  axios.get(`${api.conference_booking.get_data}/?page=${1}&search=${""}&date=${false}&woosee=${15681}`)
            return data
        }
    })

    return (
        <View style={{
            ...styles.container,
        }}>
            <View style={{ marginVertical: 10 }}>
                <Search />
            </View>
            <CardViewList DATA={response?.data?.data?.results} Item={Item} />
            <View style={{ position: 'absolute', bottom: 0, width: '100%', ...styles.shadowStyle, }}>
                <View style={{ paddingVertical: 20, marginHorizontal: 20 }}>
                    <ButtonNav name={"Book Conference"} icon_name={'newspaper'} onPress={() => router.navigate('/conference-booking/create-conference')} />
                </View>
            </View>
        </View>
    );
}

const Item = ({ item }: any) => {
    const [pressed, setPressed] = useState(false)
    return (
        <View style={{ marginVertical: '2%', }}>
            <Pressable style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 20,
                borderRadius: 10,
                marginHorizontal: 20,
                ...styles.card_shadowStyle, borderColor: '#71717A', backgroundColor: pressed ? "#F1F5F9" : 'white'
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
                <View style={{ flexDirection: 'column', paddingHorizontal: 10 }}>
                    <Text style={{ ...styles.card_title, }}>{item.meeting_about}</Text>
                   <Text> {moment(item.conf_end_date).format("DD MMM YYYY")}</Text>
                   <Text> {moment(item.disp_conf_end_date).format("DD MMM YYYY")}</Text>
                   <Text> {moment(item.conf_start_time, "HH:mm").format("hh:mm A")}</Text>
                   <Text> {moment(item.conf_end_time, "HH:mm").format("hh:mm A")}</Text>
                    <Text style={{ ...styles.card_title, }}>{item.conf_room}</Text>
                    <Text style={{ ...styles.card_title, }}>{item.first_name}{" "}{item.last_name}</Text>
                </View>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    card_title: {
        fontSize: 15,
    },
    searchShadowStyle: {
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
        height: '100%',
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
    shadowStyle: {
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
        borderWidth: 1,
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(50,50,93,0.25)',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 1,
                shadowRadius: 5,
            },
            android: {
                elevation: 2,
            },
        })
    }
});
