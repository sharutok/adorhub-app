import { useState } from "react";
import { FlatList, Platform, Pressable, StyleSheet, Text, View } from "react-native";

export default function CardViewList({DATA,Item}) {
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
        fontSize: 15,
    },
    shadowStyle: {
        borderWidth:1,
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
    }),
}
});