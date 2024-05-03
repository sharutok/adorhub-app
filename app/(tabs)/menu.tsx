import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Modules from '@/screens/modules/Modules';

export default function TabTwoScreen() {
    return (
        <View style={styles.container}>
            {/* <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
            <Modules />
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
