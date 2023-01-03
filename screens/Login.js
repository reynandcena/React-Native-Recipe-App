import React,{useState} from 'react';
import { View, Text, SafeAreaView,Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import FocusedStatusBar from "../components/FocusedStatusBar";
import { COLORS, FONTS, SIZES } from "../constants";
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons'; 
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

    const navigation = useNavigation();
    const [isChecked, setChecked] = useState(false);  

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
            <ScrollView>                
            <View style={{ flex: 1, justifyContent:'center', alignItems:'center',  paddingLeft: 20,paddingRight:20  }}>
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

                <Text style={{fontFamily:FONTS.bold, fontSize: SIZES.extraLarge, color: COLORS.black, marginTop:-20}}>Welcome back!</Text>
                <Text style={{fontFamily:FONTS.regular, fontSize: SIZES.font, color: COLORS.gray}}>We're happy to see you again</Text>
                <View style={{ marginTop: SIZES.font, marginTop:40}}>
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
                    <MaterialCommunityIcons name="email-outline" size={24} style={{ marginRight: SIZES.base, color:COLORS.gray }}/>
                    <TextInput
                        placeholder="Enter email address/Username"
                        style={{ flex: 1, fontFamily:FONTS.regular, fontSize: SIZES.font, }}
                    />
                    </View>
                </View>
                <View style={{ marginTop: SIZES.font}}>
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
                        placeholder="********"
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

                <View style={{flexDirection:'row', alignSelf:'flex-start', marginTop:20}}>
                    <Checkbox value={isChecked} onValueChange={setChecked} style={{marginRight:10, borderRadius:5}} color={isChecked ? '#FE7500' : undefined}/>
                    <Text style={{ fontFamily:FONTS.regular, fontSize: SIZES.font, color:COLORS.gray }}>Remember me</Text>
                </View>
                <View style={{ alignSelf:'flex-end', marginTop:-22}}>
                    <TouchableOpacity  onPress={() => navigation.navigate("ForgotPassword")}>
                        <Text style={{ fontFamily:FONTS.regular, fontSize: SIZES.font, color:COLORS.black }}>
                            Forgot Password
                        </Text>                        
                    </TouchableOpacity>
                </View>        
                
                <TouchableOpacity style={{width: '100%',}}  onPress={() => navigation.navigate("Home")}>
                    <View style={{
                        backgroundColor:COLORS.primary, 
                        borderRadius:8, 
                        paddingHorizontal:15, 
                        paddingVertical:10, 
                        justifyContent:'center', 
                        alignItems:'center',
                        marginTop:20,
                        
                    }}>
                        <Text style={{color:COLORS.white,fontFamily:FONTS.medium}}>Login</Text>
                    </View>     
                </TouchableOpacity>
                
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:20}}>
                    <View style={{
                        backgroundColor:COLORS.black, width:100, height:2,
                    }}/>
                    <Text style={{fontFamily:FONTS.regular, fontSize: SIZES.font, color:COLORS.black}}> or sign in with </Text>
                    <View style={{
                        backgroundColor:COLORS.black, width:100, height:2
                    }}/>
                </View>

                <View style={{flexDirection:'row',}}>
                    <TouchableOpacity style={{width: '40%',marginRight:20}}>
                        <View style={{
                            borderRadius:8, 
                            paddingHorizontal:10, 
                            paddingVertical:10, 
                            justifyContent:'center', 
                            alignItems:'center',
                            marginTop:20,
                            borderWidth:1,
                            borderColor:COLORS.gray,
                            flexDirection:'row',
                        }}>
                            {/* <MaterialCommunityIcons name="google" size={18} style={{color:COLORS.gray, marginRight:5}} /> */}
                            <Text style={{color:COLORS.gray,fontFamily:FONTS.medium}}>Google</Text>
                        </View>     
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: '40%',marginRLeft:20}}>
                        <View style={{
                            borderRadius:8, 
                            paddingHorizontal:10, 
                            paddingVertical:10, 
                            justifyContent:'center', 
                            alignItems:'center',
                            marginTop:20,
                            borderWidth:1,
                            borderColor:COLORS.gray,
                            flexDirection:'row',
                        }}>
                            {/* <MaterialCommunityIcons name="facebook" size={20} style={{color:COLORS.gray, marginRight:5}} /> */}
                            <Text style={{color:COLORS.gray,fontFamily:FONTS.medium}}>Facebook</Text>
                        </View>     
                    </TouchableOpacity>
                </View>

                <View style={{marginTop:30, flexDirection:'row'}}>
                    <Text style={{ fontFamily:FONTS.regular, fontSize: SIZES.font, color:COLORS.black }}>
                        Don't have an account?
                    </Text>  
                    <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
                        <Text style={{ fontFamily:FONTS.medium, fontSize: SIZES.font, color:COLORS.primary, marginLeft:5 }}>
                            Sign up
                        </Text>                        
                    </TouchableOpacity>
                </View>  
                
            </View>
            </ScrollView>    
        </SafeAreaView>
    )
}

export default Login