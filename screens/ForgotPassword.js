import React from 'react';
import { View, Text, SafeAreaView,Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import FocusedStatusBar from "../components/FocusedStatusBar";
import { COLORS, FONTS, SIZES } from "../constants";
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:COLORS.white }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />  
      <ScrollView style={{marginTop:40}}> 
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
          <Text style={{fontFamily:FONTS.bold, fontSize: SIZES.extraLarge, color: COLORS.black,}}>Reset Password</Text> 
          <Text style={{
            fontFamily:FONTS.regular, 
            fontSize: SIZES.font, 
            color: COLORS.gray,
            textAlign:'center'
          }}>Enter the email associated with your account and we'll send an email with instructions to reset your password</Text>

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
                  placeholder="Enter email address"
                  style={{ flex: 1, fontFamily:FONTS.regular, fontSize: SIZES.font, }}
              />
              </View>
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
                  <Text style={{color:COLORS.white,fontFamily:FONTS.medium}}>Send instructions</Text>
              </View>     
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ForgotPassword