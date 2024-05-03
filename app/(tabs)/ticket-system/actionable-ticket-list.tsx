import { StyleSheet } from 'react-native';

import { View } from '@/components/Themed';
import ActionableTicketList from '@/screens/ticketing_system/list/ActionableTicketList';

export default function _ActionableTicketList() {
    return (
        <View style={styles.container}>
            <ActionableTicketList/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
});
