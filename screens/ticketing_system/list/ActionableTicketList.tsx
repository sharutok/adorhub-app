import { BackHandler, StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Search from '@/components/Reusable/Search';
import CardViewList from '@/components/Reusable/CardListView';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/helper/Api';
import ButtonNav from '@/components/Reusable/ButtonNav';
import { router } from 'expo-router';

export default function ActionableTicketList() {

    const response = useQuery({
        queryKey: ['ticket-listing'],
        queryFn: async () => {
            const data = await fetch(`${api.ticket_system.view_all_data}/?page=${1}&search=${""}&woosee=${15681}&viewonly=${true}`);
            const json = await data.json();
            return json 
        }
    })

    return (
        <View style={{ ...styles.container }}>
            <View style={{ marginVertical: 10}}>
                <Search />
            </View>
            <CardViewList DATA={response?.data?.results} />
            <View style={{ position: 'absolute', bottom: 0, width: '100%',...styles.shadowStyle, }}>
                <View style={{paddingVertical:20,marginHorizontal:20}}>
                    <ButtonNav name={"Create Ticket"} icon_name={'newspaper'} onPress={()=>router.navigate('ticket-system/create-ticket')} />
                </View>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
        elevation: 0, // Only for Android (set to 0 to prevent default shadow)
    }
});
