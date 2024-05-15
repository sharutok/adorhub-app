import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Pressable, Alert, TouchableOpacity
} from "react-native";
import { Image } from "expo-image";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import Icon from 'react-native-vector-icons/Ionicons';
import { router } from 'expo-router';


const signInSchema = z.object({
  // email: z.string().min(1, 'Required!').email(),
  // password: z
  //   .string().min(4, 'Required!'),
});

// type CustomTextFieldProps = { control:any, errors:string, name:string, label:string, secureTextEntry:boolean }
type SignInSchemaType = z.infer<typeof signInSchema>;

function HomeScreen() {
  const [hidePassword, setHidePassword] = useState(true);
  const [hideCheckBox, setHideCheckbox] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(signInSchema),
  });
  
  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = (data: React.SetStateAction<null>) => {
    try{
      console.log("Submitted Data:", data);
      setSubmittedData(data);
      router.navigate('/(tabs)/home');


    }catch(error){
      console.log(error)
    }
      };
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text
          style={{
            ...styles.text,
            fontFamily: "ArchiveRegular",
            fontSize: 30,
            justifyContent: "center",
          }}>
          ADOR
          <Text
            style={{
              ...styles.text,
              fontFamily: "ArchiveRegular",
              color: "red",
              justifyContent: "center",
            }}>
            HUB
          </Text>
        </Text>
        <CustomTextField
          control={control}
          errors={errors}
          name={"email"}
          label={"Email Address"}
          secureTextEntry={false}
        />
        <View>
        <CustomTextFieldForPassword
          control={control}
          errors={errors}
          name={"password"}
          label={"Password"}
            secureTextEntry={true}
            hidePassword={hidePassword}
            setHidePassword={setHidePassword}
          />
          <View style={{marginTop:'5%'}}>
          <CustomCheckBox hideCheckBox={hideCheckBox} setHideCheckbox={setHideCheckbox} />
          </View>
            </View>
        <Text
          style={{
            color: "#64748B",
            textAlign: "center",
            marginVertical: "1%",
            fontWeight:500,
          }}>
          Forgot password? Contact ADORHUB Admin
        </Text>
        <Pressable
          style={styles.submit_btn}
          onPress={handleSubmit(onSubmit)}>
          <Text
            style={{
              //   color: "#64748B",
              color: "white",
              fontWeight: "700",
              textAlign: "center",
              zIndex: 10,
            }}>
            Login
          </Text>
        </Pressable>
      </View>
      <Image
        style={styles.image}
        source={require("../../assets/images/bile-login-bg.png")}
        contentFit="cover"
      />
    </View>
  );
}

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
    // position: "absolute",
    // top: "20%",
    width: "100%",
    borderColor: "#94A3B8",
    borderWidth: 1,
    padding: 12,
  },
  errorText: {
    color: "red",
    marginTop: 5,
    // textAlign: "right",
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

const CustomTextField = ({ control, errors, name, label, secureTextEntry }) => {
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
                   style={{ ...styles.input, color: "black" }}
                  placeholder={label}
                  value={value}
                  onChangeText={onChange}
                  secureTextEntry={secureTextEntry||false}
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
const CustomTextFieldForPassword = ({ control, errors, name, label, secureTextEntry, hidePassword, setHidePassword }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems:'center',}} >
      <View style={{ ...styles.input, color: "black" }}>
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
                   
                  placeholder={label}
                  value={value}
                  onChangeText={onChange}
                secureTextEntry={hidePassword}
                  onBlur={onBlur}
                  returnKeyType="done"
                />
            )}
          />
           {errors[name] && (
        <Text style={styles?.errorText}>{errors[name]?.message}</Text>
      )}
        </View>
      <TouchableOpacity style={{ position:'absolute',alignItems:'flex-end',right:0,marginRight:5,backfaceVisibility:'white' }} onPress={() => setHidePassword(!hidePassword)}>
        <Icon
          name={hidePassword ? 'eye-off-outline' : 'eye-outline'}
          size={25}
          color="grey"
        />
      </TouchableOpacity>
    </View>
  );
};

const CustomCheckBox = ({ hideCheckBox, setHideCheckbox }) => {
  return <View style={{alignItems:'center',flexDirection:'row',gap:10,justifyContent:'center'}}>
    <TouchableOpacity 
      style={{
        borderColor: "#94A3B8",
        borderWidth: 1,
        borderRadius:5,
        padding: 1,
}}
      onPress={() => setHideCheckbox(!hideCheckBox)}
    >
      {hideCheckBox ?<Icon
        name={'checkmark'}
        size={16}
        color="black"
      />:<View style={{margin:8}}></View>}
    </TouchableOpacity>
    <Text
      style={{
        color: "#64748B",
        textAlign: "center",
        marginVertical: "5%",
        fontSize:12
      }}>
      Remember me and keep me logged in
    </Text>
  </View>;
};
export default HomeScreen;
