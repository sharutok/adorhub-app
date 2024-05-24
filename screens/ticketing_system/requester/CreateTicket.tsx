import AutoComplete from "@/helper/AutoComplete";
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from "react-hook-form";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { z } from "zod";
import * as DocumentPicker from 'expo-document-picker';
import { Alert } from "react-native";
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import LoadingButton from "@/helper/LoadingButton";
import { useState } from "react";   
const signInSchema = z.object({
tkt_title:z.string().max(500, 'max character of 500').min(1,'Required!  '),
tkt_type:z.string().max(500, 'max character of 500').min(1,'Required!   '),
req_type:z.string().max(500, 'max character of 500').min(1,'Required!   '),
tkt_description:z.string().max(500, 'max character of 500').min(1,'Required!    '),
});
type SignInSchemaType = z.infer<typeof signInSchema>;

export default function CreateTicket() {
    const [tktFiles, setTKTFiles] = useState([])

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInSchemaType>({
        resolver: zodResolver(signInSchema),
    });

    const onSubmit = async (data) => {
        try {
            console.log("data");
            
            const document = await DocumentPicker.getDocumentAsync({
                type: '*/*', // Accept any file type
            });

            // Check if document selection is cancelled
            // if (document.type === 'cancel') {
            //     return;
            // }
            
            const name = document.assets[0].name
            setTKTFiles([...tktFiles, name]);
            if (document.type === 'success') {
                // const formData = new FormData();
                // formData.append('file', {
                //     uri: document.assets.uri,
                //     name: document.assets.name,
                //     type: document.assets.type,
                // });
            } else {
                return
            }
            

            // Show success message
            // Alert.alert('Success', 'File uploaded successfully');
        } catch (error) {
            // Show error message if upload fails
            Alert.alert('Error', 'Failed to upload file');
            console.error('Error uploading file:', error);
        }
    };
    
    return (
        <ScrollView style={{ backgroundColor:'white'}}>
            <View style={{ flexDirection: 'column', gap: 20, marginHorizontal: '10%',marginTop:'4%' }}>
                <Text style={{ fontFamily: 'SourceSansProSemiBold', fontSize: 20, color:'#626262'}} >Ticket Information</Text>
            <CustomTextField
                control={control}
                errors={errors}
                    name={"tkt_title"}
                    label={"Ticket Title"}
                    secureTextEntry={false}
                    multiline={0}
            />
                <AutoComplete name={"tkt_type"} label={"Ticket Type"} />
                <AutoComplete name={"req_type"} label={"Requirement Type"} />
            <CustomTextField
                control={control}
                errors={errors}
                    name={"tkt_description"}
                    label={"Requirement Description"}
                    secureTextEntry={false}
                    multiline={1}
                />
                <View style={{ borderBottomColor:'#ED1E28',borderBottomWidth:1,padding:1,marginHorizontal:10}}></View>
                <TouchableOpacity  onPress={onSubmit } style={{ borderWidth: 1, padding: 30, borderRadius: 10, borderColor: '#8E9094',borderStyle:'dashed',marginTop:10 }}>
                    <View style={{flexDirection:'column',alignItems:'center'}}>
                        <Icon
                        name={'cloud-upload'}
                        size={25}
                        color="grey"
                        />
                        </View>
                    <Text style={{ color: 'black',fontWeight:'700',textAlign:'center' }}>Click to Upload Files</Text>
                    <Text style={{ color: 'black', fontWeight: '300', fontStyle: 'italic', textAlign: 'center',marginVertical:'2%' }}>Upload files that are less than 10mb in size.</Text>
                </TouchableOpacity>
                {tktFiles.length > 0 && tktFiles.map((x, i) => {
                    return (
                        <View key={i} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderRadius: 10, backgroundColor:'#F6F7F9',padding:10,}}>
                        <View style={{ flexDirection: 'row', gap: 5,
                        }}>
                            <Text>{i+1}.</Text>
                            <Text>{x}</Text>
                            </View>
                            <IconAntDesign
                                name={'close'}
                            size={25}
                            color="red"
                            />
                        </View>
                    )
                })}
                <LoadingButton onPress={handleSubmit(onSubmit)}/>
            </View>
        </ScrollView>
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
                        multiline={multiline?true:false}
                        numberOfLines={multiline ? multiline :0}
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
    form: {
        position: "absolute",
        width: "80%",
        marginTop: "40%",
        display: "flex",
        gap: 20,
    },
    input: {
        borderRadius: 5,
        width: "100%",
        borderColor: "#8E9094",
        borderWidth: 1, 
        paddingHorizontal: 6,
        paddingVertical: '4%',
    },
    errorText: {
        color: "red",
        marginTop: 10,
    },
    container: {
        flex: 1,
        alignItems: "center",
    },
    image: {
        zIndex: -1,
        width: "100%",
        height: "50%", // adjust the height of the image as needed
        position: "absolute",
        bottom: 0, // position the image at the bottom of the container
    },
    text: {
        // position: "absolute",
        // top: "50%", // position the text at the vertical center of the container
        flex: 1,
        textAlign: "center",
        fontWeight: "bold",
    },
    submit_btn: {
        width: "100%",
        padding: 10,
        borderRadius: 5,
        zIndex: 10,
        backgroundColor: "#555259",
    },
});