import { TouchableOpacity, View, Text, Image, Dimensions, StyleSheet } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const windowWidth = Dimensions.get('window').width;

const ModulesIcons = [
    {
        iconsType: FontAwesome6, iconsName: "users-line", iconTitle: "Book Conference", path: "/conference/booking/new"
    },
    {
        iconsType: FontAwesome5, iconsName: "clipboard-check", iconTitle: "Raise a Ticket", path: "/ticket/sys/new",
    },
    {
        iconsType: FontAwesome6, iconsName: "id-badge", iconTitle: "Add Visitor", path: "/vistors/management/new"
    },
    {
        iconsType: FontAwesome6, iconsName: "file-invoice-dollar", iconTitle: "Raise Capex", path: "/capex/list",
    },
    {
        iconsType: FontAwesome5, iconsName: "user-cog", iconTitle: "HR Policies", path: "/policies/?type=HR",
    },
    {
        iconsType: MaterialIcons, iconsName: "policy", iconTitle: "IT Policies", path: "/policies/?type=IT",
    },
]

const ShortcutLinks = () => {
    return (
        <View>
            <View className="flex justify-center mt-5" style={{ flexDirection: 'row', rowGap: 20, columnGap: 20, flexWrap: "wrap" }}>
                {ModulesIcons.map((_icon, i) => {
                    return (
                        <View style={{ width: windowWidth / 2.3 }} className="p-5 border-[2rem] border-solid border-[#353535] rounded-lg">
                            <View >
                                <TouchableOpacity
                                    onPress={() => {
                                        console.log("Hi");
                                        // navigation.navigate("HomePage")
                                    }}
                                >
                                    < _icon.iconsType name={_icon.iconsName} size={24} color='black' />
                                    <Text className='mt-2'>{_icon.iconTitle}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}

export default ShortcutLinks

const styles = StyleSheet.create({

    footerimage: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    container: {
        display: "flex",
        gap: 20,
    },
    input: {
        height: 40,
        width: '100%',
        borderWidth: 1,
        padding: 8,
        fontSize: 16,
        borderColor: "#adb5bd",
        borderRadius: 2,

    },
    button: {
        backgroundColor: "#555259",
        borderRadius: 3,
        padding: 10,
        margin: 10
    },
    text: {
        marginHorizontal: 10
    },
    signButton: {
        color: 'white',
        textAlign: "center"
    },
    label: {
        textAlign: "center",
        color: "#868E96",
        fontSize: 14,
        textDecorationLine: "underline"
    },
    label1: {
        textAlign: "center",
        color: "#333533",
        fontSize: 16
    },


});
