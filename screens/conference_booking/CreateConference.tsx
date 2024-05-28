import { View, Text, ScrollView, Pressable, TextInput, StyleSheet, Platform } from 'react-native'
import { router } from 'expo-router';
import { Controller, useForm } from "react-hook-form";
import { useMemo, useState } from 'react'
import React from 'react'
import moment from 'moment'
import DateTimePicker from '@react-native-community/datetimepicker';
import AutoComplete from '@/helper/AutoComplete';
import Icon from "react-native-vector-icons/MaterialIcons";
import { BottomSheet } from '@/helper/BottomSheet';
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';

const signInSchema = z.object({
    tkt_title: z.string().max(500, 'max character of 500').min(1, 'Required!'),
    tkt_type: z.string().max(500, 'max character of 500').min(1, 'Required!'),
    req_type: z.string().max(500, 'max character of 500').min(1, 'Required!'),
    tkt_description: z.string().max(500, 'max character of 500').min(1, 'Required!'),
});

type SignInSchemaType = z.infer<typeof signInSchema>;
export default function CreateConference() {
    const [dateTimePicker, setDateTimePicker] = useState(false)
    const [dateSelect, setDateSelect] = useState(moment().format("DD-MM-YYYY"))
    const [showBottomSheet, setShowBottomSheet] = React.useState(false)


    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInSchemaType>({
        resolver: zodResolver(signInSchema),
    });

    const hide = () => {
        setShowBottomSheet(false)
    }
    const value = useMemo(() => {
        return (Array.from(Array(41).keys()).map(x => {
            return moment("06/23/2023 08:00", "MM/DD/YYYY hh:mm").add(15 * (x), 'minute').format("hh:mm A");
        }))
    }, [])

    return (
        <View >
            <View style={{ flexDirection: 'column', width: '100%', backgroundColor: '#fff' }}>
                <>
                    <View style={{ flexDirection: 'column', gap: 15, position: 'absolute', width: '100%', zIndex: 5, paddingHorizontal: '5%', backgroundColor: '#fff', paddingVertical: "4%" }}>
                        <View style={{ ...styles.input, borderColor: "#8E9094", borderWidth: 1, }}>
                            <Pressable onPress={() => setDateTimePicker(true)} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                                <Text>{dateSelect}</Text>
                                <Icon style={{ color: 'black' }}
                                    name={'calendar-month'}
                                    size={25}
                                    color="grey"
                                />
                            </Pressable>
                        </View>
                        {dateTimePicker && <DateTimePicker
                            testID="dateTimePicker"
                            value={new Date()}
                            mode={'date'}
                            is24Hour={false}
                            display="default"
                            onChange={(event, selectedDate) => {
                                const currentDate = selectedDate || dateSelect;
                                setDateSelect(moment(currentDate).format("DD-MM-YYYY"))
                                //   setDateTimePicker(Platform.OS === 'ios');
                                //   setDateSelect(currentDate);
                            }}
                        />}
                        <AutoComplete label={"Conference Room"} />
                    </View>
                </>
                <BottomSheet show={showBottomSheet} height={500} onOuterClick={hide}>
                    <View style={{display:'flex',justifyContent:'flex-end',padding:"2%"}}>
                        <Pressable onPress={hide} style={styles.bottomSheetCloseButton}>
                            <Icon style={{ color: 'black' }}
                                name={'close'}
                                size={25}
                                color="grey"
                            />
                        </Pressable>
                        <CustomTextField
                            control={control}
                            errors={errors}
                            name={"tkt_description"}
                            label={"About Meeting"}
                            secureTextEntry={false}
                            multiline={1}
                        />
                        <CustomTextField
                            control={control}
                            errors={errors}
                            name={"meeting_info"}
                            label={"About Meeting"}
                            secureTextEntry={false}
                            multiline={1}
                        />
                    </View>
                </BottomSheet>
                <ScrollView style={{ marginTop: "35%", paddingHorizontal: '5%' }}>
                    {value.map((x, i) => {
                        return (
                            // <Pressable onPress={() => router.push("/conference-booking/conference-form")}
                            <Pressable onPress={() => setShowBottomSheet(true)}
                                style={{ borderTopWidth: i !== 0 ? 1 : 0, width: '100%', padding: 20, borderColor: '#808285' }}
                                key={i}>
                                <Text style={{ fontSize: 15 }}>{x}</Text>
                            </Pressable>)
                    })}
                </ScrollView>
            </View>
        </View>
    )
}

const CustomTextField = ({ control, errors, name, label, secureTextEntry, multiline }) => {
    return (
        <View>
            <Controller
                name={name}
                defaultValue=""
                control={control}
                rules={{
                    validate: async (value) => {
                        try {
                            await signInSchema.parseAsync({ [name]: value });
                            return true;
                        } catch (error: any) {
                            return error.message;
                        }
                    },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholderTextColor='#8E9094'
                        multiline={multiline ? true : false}
                        numberOfLines={multiline ? multiline : 0}
                        style={{ ...styles.input }}
                        placeholder={label}
                        value={value}
                        onChangeText={onChange}
                        secureTextEntry={secureTextEntry || false}
                        onBlur={onBlur}
                        returnKeyType="done"
                    />
                )}
            />
            {errors[name] && (
                <Text style={styles?.errorText}>{errors[name]?.message}</Text>
            )}
        </View>
    );
};


const styles = StyleSheet.create({
    errorText: {
        color: "red",
        marginTop: 10,
    },
    bottomSheetInput: {
        borderRadius: 5,
        width: "100%",
        borderColor: "#8E9094",
        borderWidth: 1,
        paddingHorizontal: 6,
        paddingVertical: '4%',
    },
    showButton: {
        marginTop: 48,
        padding: 16,
        backgroundColor: '#FFFF',
        alignSelf: 'center',
        borderRadius: 8,
    },
    input: {
        borderRadius: 10,
        borderColor: "white",
        borderWidth: 1,
        padding: 12,
    },
    buttonText: {
        fontSize: 20,
    },
    bottomSheetText: {
        fontSize: 24,
        marginBottom: 80,
    },
    bottomSheetCloseButton: {
        // padding: 16,
        // backgroundColor: 'deeppink',
        // borderRadius: 8,
    },
})
