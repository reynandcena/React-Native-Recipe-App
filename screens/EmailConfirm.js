import React from 'react';
import { View, Text, SafeAreaView,Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import FocusedStatusBar from "../components/FocusedStatusBar";
import { COLORS, FONTS, SIZES } from "../constants";
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const EmailConfirm = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor:COLORS.white }}>
            <FocusedStatusBar backgroundColor={COLORS.primary} />  
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

                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Text style={{
                        fontFamily: FONTS.semiBold,
                        fontSize: SIZES.extraLarge-2,
                        color:COLORS.black
                    }}>Check your email</Text>
                    <Text style={{
                        fontFamily: FONTS.regular,
                        fontSize: SIZES.font,
                        color:COLORS.gray,
                        textAlign:'center'
                    }}>We have sent a password recovery instructions to your email</Text>
                </View>
                <TouchableOpacity style={{width: '100%',}}  onPress={() => navigation.navigate("EmailConfirm")}>
                    <View style={{
                        backgroundColor:COLORS.primary, 
                        borderRadius:8, 
                        paddingHorizontal:15, 
                        paddingVertical:10, 
                        justifyContent:'center', 
                        alignItems:'center',
                        marginTop:20,
                        
                    }}>
                        <Text style={{color:COLORS.white,fontFamily:FONTS.medium}}>Open Email</Text>
                    </View>     
                </TouchableOpacity>
                <View style={{marginTop:20}}>
                    <TouchableOpacity onPress={() => navigation.navigate("CreateNewPassword")}>
                        <Text style={{ fontFamily:FONTS.regular, fontSize: SIZES.font, color:COLORS.gray }}>
                            Skip, I'll confirm later
                        </Text>                        
                    </TouchableOpacity>
                </View>  

                <View style={{marginTop:190, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{ fontFamily:FONTS.regular, fontSize: SIZES.font, color:COLORS.black, textAlign:'center' }}>
                        Did not receive the email? 
                    </Text>   
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity>
                            <Text style={{ fontFamily:FONTS.regular, fontSize: SIZES.font, color:COLORS.primary, textAlign:'center'}}>
                                Resend
                            </Text>                        
                        </TouchableOpacity>
                        <Text style={{ fontFamily:FONTS.regular, fontSize: SIZES.font, color:COLORS.black, textAlign:'center', marginLeft:5, marginRight:5 }}>
                            or
                        </Text>   
                        <TouchableOpacity  onPress={() => navigation.navigate("ForgotPassword")}>
                            <Text style={{ fontFamily:FONTS.regular, fontSize: SIZES.font, color:COLORS.primary, textAlign:'center'}}>
                                Try another email address
                            </Text>                        
                        </TouchableOpacity>
                    </View>
                    
                </View> 
            </View>
        </SafeAreaView>
    )
}

export default EmailConfirm