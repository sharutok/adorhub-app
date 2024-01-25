import React, { useEffect, useState } from 'react';
import { Platform, View, StyleSheet, Text, Dimensions, Image, SafeAreaView, FlatList, Linking, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios'
import { api } from '../../Extras/api';
import moment from 'moment';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Yammer = () => {

    const [yammerData, setYammerData] = useState([])
    const getData = async () => {
        try {
            const response = await axios.get(api.yammer.get_data);
            setYammerData(response.data.data)
        } catch (error) {
            if (error.response) {
                console.error("Request failed with status code:", error.response.status);
            } else {
                console.error("Error in fetchData:", error.message);
            }
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }} >
            <FlatList
                data={yammerData}
                horizontal={true}
                snapToAlignment='center'
                renderItem={({ item }) => <Item item={item} />}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.created_at}
                ItemSeparatorComponent={() => {
                    return (
                        <View
                            style={{
                                height: "100%",
                                width: 20,
                            }} />
                    );
                }}

            />
        </SafeAreaView>
    );
}
export default Yammer;



const Item = ({ item }) => {
    return (
        <View >
            <ScrollView >
                < View style={[styles.card, styles.shadowProp]}  >
                    <View style={{ flexDirection: "row", gap: 10 }}>
                        <View className="bg-blue-900 rounded-full w-12 h-12 px-2 py-2">
                            <Text className="text-[#fff] text-xl mt-0.5">{(item.sender_id).split(" ")[0][0]}{String((item.sender_id).split(" ")[1])[0].toUpperCase()}</Text>
                        </View>
                        <View className="mt-2">
                            <Text className="text-md font-bold">{item.sender_id}</Text>
                            <Text className="text-xs" >{moment(item.created_at.substring(0, 10), "YYYY/MM/DD").format("DD MMMM YYYY")}</Text>
                        </View>
                    </View>
                    <View className="mt-5">
                        <Text className="text-md">{item.message}</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View >
                                <View style={{ flexDirection: "row", gap: 3 }}>
                                    <AntDesign name="like1" size={15} color="black" />
                                    <Text className="text-md">{item.liked_by}</Text>
                                </View>
                            </View>
                            <Text
                                onPress={() => Linking.openURL(item.web_url)}>
                                Click here for more....
                            </Text>
                        </View>
                    </View>
                </View >
            </ScrollView >
        </View>
    )
}



const styles = StyleSheet.create({
    heading: {
        fontSize: 12,
        fontWeight: '600',
        marginBottom: 13,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 5,
        height: windowHeight / 3,
        width: windowWidth,
        marginVertical: 10,
    },
    shadowProp: {
        backgroundColor: 'white', // Set the background color of your component
        borderRadius: 10, // Set the border radius as needed
        shadowColor: 'black', // Set the shadow color
        shadowOffset: { width: 0, height: 2 }, // Set the shadow offset
        shadowOpacity: 0.3, // Set the shadow opacity
        shadowRadius: 5, // Set the shadow radius
        padding: 10, // Set padding as needed
        margin: 10, // Set margin as needed
    },
    // ...(Platform.OS === 'android' ? iosStyles : androidStyles),
});

const iosStyles = {
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
};

const androidStyles = {
    elevation: {
        elevation: 20,
        shadowColor: '#52006A',
    },
};