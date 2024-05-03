import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

export default function CardViewList({DATA}) {
    return (
        <View>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
    </View>
)
}

const Item = ({ item }: any) => {
    const [pressed, setPressed] = useState(false)
    return (
        <View style={{   marginVertical: '2%', ...styles.shadowStyle }}>
        <Pressable style={{ flexDirection: 'row',  alignItems: 'center', backgroundColor: pressed ? "#F1F5F9" : 'white', paddingVertical: 20, borderRadius: 10, marginHorizontal: 20 ,}}
            onPressIn={() => {
                setPressed(true)
                // router.navigate('/ticket-system/actionable-ticket-list');
                console.log(item.label);
            }}
            onPressOut={() => {
                setPressed(false)

            }}
            >
                <View style={{flexDirection:'column'}}>
            <Text style={{ ...styles.title, }}>{item.ticket_no}</Text>
            <Text style={{ ...styles.title, }}>{item.tkt_type}</Text>
            <Text style={{ ...styles.title, }}>{item.requester_emp_name}</Text>
            <Text style={{ ...styles.title, }}>{item.tkt_status}</Text>
            <Text style={{ ...styles.title, }}>{item.tkt_current_at}</Text>
            <Text style={{ ...styles.title, }}>{item.created_at}</Text>
                </View>
        </Pressable>
            </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    item: {
        flex: 1,
        alignItems: 'flex-start'
        // padding: 20,
        // marginVertical: 8,
        // marginHorizontal: 16,
    },
    title: {
        fontSize: 20,
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