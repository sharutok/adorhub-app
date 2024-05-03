import { api } from '@/helper/Api';
import { Image } from "expo-image";
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import { StyleSheet, View, Text, ScrollView, FlatList, Button, Linking } from 'react-native';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
import * as React from 'react';
import { Video } from 'expo-av';



import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';

export default function Yammer() {
    
    const response = useQuery({
        queryKey: ['todos'], queryFn: async() => {
            const data = await fetch(`${api.yammer.get_data}`);
            const json = await data.json();
            return json 
        }
    })

    type ItemProps = { title: string };

    const Item = ({ item }) => (
        <View style={styles.item}>
            <View style={{  borderRadius: 10, padding: 10, backgroundColor: 'white', ...styles.shadowStyle }}>
            <View >
                <View style={{flexDirection:'row',gap:5,alignItems:'center',}}>
                        <Avatar initials={(item.sender_id).split(" ")[0][0]+String((item.sender_id).split(" ")[1])[0].toUpperCase()} size={40} color="#2B58A5" />
                <View style={{flexDirection:'column',gap:3}}>
            <Text style={{fontSize:15,fontWeight:700}}>{item.sender_id}</Text>
                            <Text style={{ fontSize: 10, }}>{moment(item.created_at, "YYYY/MM/DD").format("DD MMMM YYYY")}</Text>
                </View>
                </View>
            </View>
            <View>
                <Text style={{ fontSize: 20, fontWeight: '300', marginTop: '3%' }}>{item.message.length > 50 ? <Text>{item.message.substring(0, 50)}...</Text> : <Text>{item.message.substring(0, 50)}</Text>}</Text>
            </View>
            <View style={{justifyContent:"center",display:'flex'}}>
                {item?.image[0]?.type === "image" &&<Image
                style={{...styles.image,marginTop:"5%"}}
                source={require("../../assets/images/PCM.png")}
                contentFit="contain"
                />}
                {item?.image[0]?.type === "file" &&<VideoFile/>}
                </View>
            <View style={{ flexDirection:'row',alignItems:'center',gap:5 ,marginTop:10}}>
                <View>
                    <Icon
                        name={'thumbs-o-up'}
                        size={16}
                        color="black"
                    />
                </View>
                    <Text style={{ fontSize: 15 }}>{item.liked_by}</Text>
                    <View style={{ flex: 3, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com')}>
                            <Text style={{ color: 'grey' }}>Click for more...</Text>
                        </TouchableOpacity>
                    </View>
            </View>
            </View>
        </View>
    );
    return (
        <View >
            <FlatList
                pagingEnabled
                horizontal={true}
                style={{height:'80%'}}
                data={response?.data?.data}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.created_at}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

function VideoFile() {
    const [isReady, setIsReady] = React.useState(false);

    const handlePlaybackStatusUpdate = (status:any) => {
        if (!status.isLoaded) {
            setIsReady(false);
        } else {
            setIsReady(true);
        }
    };
    return (
        <View>

        <View style={{
            // height: '50%',
            padding: 20,
            flex: 3,
        }}>
            <Video
                    source={{ uri: 'https://adorwelding.org/Adorhub_uploads/Ador Falcon _ Admin - Google Chrome 2023-08-25 14-13-59.mp4' }}
                style={{
                    width: '100%',
                    height: 200,
                    }}
                    resizeMode='cover'
                useNativeControls
                // isLooping
                shouldPlay={false}
                onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
            />
            </View>
            {!isReady && <Text >Loading Video...</Text>}
                </View>
    );
}

const Avatar = ({ initials, size, color }) => {
    return (
        <View style={[styles.avatar, { width: size, height: size, backgroundColor: color }]}>
            <Text style={styles.initials}>{initials}</Text>
        </View>
    );
};

 

const styles = StyleSheet.create({
    avatar: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 999,
    },
    initials: {
        fontSize: 20,
        color: 'white',
        fontWeight: '500',
    },
    container: {
        backgroundColor:'red',
        height: '70%',
        padding:20,
        flex: 3,
    },
    item: {
        padding: 10,
        width:width,
    },
    title: {
        fontSize: 32,
    },
    image: {
        width: "100%",
        height: "70%",
    }, _container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    video: {
        alignSelf: 'center',
        width: 320,
        height: 200,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
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



