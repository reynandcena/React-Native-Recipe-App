import React, {useState} from 'react';
import { View, Text, SafeAreaView,Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import FocusedStatusBar from "../components/FocusedStatusBar";
import { COLORS, FONTS, SIZES } from "../constants";
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const CreateNewPassword = () => {

    const navigation = useNavigation();

    const [data, setData] = useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
    });

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor:COLORS.white }}>
            <FocusedStatusBar backgroundColor={COLORS.primary} />  
            <ScrollView style={{marginTop:40}}> 
                <View style={{ flex: 1, justifyContent:'center', alignItems:'center',  paddingLeft: 20,paddingRight:20 }}>
                    <View style={{
                        width:'90%',
                    }}>
                        <Image 
                            source={require('../assets/icon.png')}
                            style={{
                                width: '100%',
                                height: 250,
                                resizeMode:'contain', 
                                marginTop:-20
                            }} 
                        />
                    </View>
                    <Text style={{fontFamily:FONTS.bold, fontSize: SIZES.extraLarge, color: COLORS.black,}}>Create new password</Text> 
                    <Text style={{
                        fontFamily:FONTS.regular, 
                        fontSize: SIZES.font, 
                        color: COLORS.gray,
                        textAlign:'center'
                    }}>Your new password must be different from previous used passwords.</Text>

                    <View style={{ marginTop: SIZES.font, marginTop:20}}>
                        <View
                            style={{
                                width: "100%",
                                borderRadius: SIZES.font,
                                backgroundColor: COLORS.input,
                                flexDirection: "row",
                                alignItems: "center",
                                paddingHorizontal: SIZES.font,
                                paddingVertical: SIZES.small - 2,
                            }}
                        >
                        <MaterialCommunityIcons name="account-lock-outline" size={24} style={{ marginRight: SIZES.base, color:COLORS.gray }}/>
                        <TextInput
                            placeholder="Enter New Password"
                            style={{ flex: 1, fontFamily:FONTS.regular, fontSize: SIZES.font, }}
                            secureTextEntry={data.secureTextEntry ? true : false}
                        />
                        <TouchableOpacity
                            onPress={updateSecureTextEntry}
                        >
                            {data.secureTextEntry ? 
                            <Feather 
                                name="eye-off"
                                color="grey"
                                size={20}
                            />
                            :
                            <Feather 
                                name="eye"
                                color="grey"
                                size={20}
                            />
                            }
                        </TouchableOpacity>
                        </View>
                    </View> 

                    <View style={{ marginTop: SIZES.font, marginTop:20}}>
                        <View
                        style={{
                            width: "100%",
                            borderRadius: SIZES.font,
                            backgroundColor: COLORS.input,
                            flexDirection: "row",
                            alignItems: "center",
                            paddingHorizontal: SIZES.font,
                            paddingVertical: SIZES.small - 2,
                        }}
                        >
                        <MaterialCommunityIcons name="account-lock-outline" size={24} style={{ marginRight: SIZES.base, color:COLORS.gray }}/>
                        <TextInput
                            placeholder="Confirm New Password"
                            style={{ flex: 1, fontFamily:FONTS.regular, fontSize: SIZES.font, }}
                            secureTextEntry={data.secureTextEntry ? true : false}
                        />
                            <TouchableOpacity
                                onPress={updateSecureTextEntry}
                            >
                                {data.secureTextEntry ? 
                                <Feather 
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                />
                                :
                                <Feather 
                                    name="eye"
                                    color="grey"
                                    size={20}
                                />
                                }
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity style={{width: '100%',}} onPress={() => navigation.navigate("Login")}>
                        <View style={{
                            backgroundColor:COLORS.primary, 
                            borderRadius:8, 
                            paddingHorizontal:15, 
                            paddingVertical:10, 
                            justifyContent:'center', 
                            alignItems:'center',
                            marginTop:20,
                            
                        }}>
                            <Text style={{color:COLORS.white,fontFamily:FONTS.medium}}>Reset Password</Text>
                        </View>     
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default CreateNewPassword