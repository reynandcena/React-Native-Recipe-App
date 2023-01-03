import React from 'react';
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { COLORS, FONTS, SIZES, assets } from "../constants";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
import FocusedStatusBar from '../components/FocusedStatusBar';

const ProfileScreen = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{backgroundColor:COLORS.white, height:'100%',padding: SIZES.large,}}>
        <FocusedStatusBar backgroundColor={COLORS.primary} /> 
        <ScrollView>
          <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
            <View style={{ width: 105, height: 105, marginTop:40 }}>
              <Image
                source={assets.avatar}
                resizeMode="contain"
                style={{ width: "100%", height: "100%", borderRadius: 100,}}
              />
              <View style={{backgroundColor:COLORS.primary, padding:5,borderRadius:100,position:'absolute', right:5, bottom:0}}>
                <Ionicons name="camera-reverse-outline" size={18} color="white" />
              </View>
            </View>
            <View style={{marginTop:20}}>
              <Text style={{fontFamily:FONTS.medium}}>Name</Text>
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
                  <TextInput
                      value='John Wick'
                      style={{ flex: 1, fontFamily:FONTS.regular, fontSize: SIZES.font, }}
                  />
              </View>
            </View>

            <View style={{marginTop:20}}>
              <Text style={{fontFamily:FONTS.medium}}>Email Address</Text>
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
                  <TextInput
                      value='johnwick@gmail.com'
                      style={{ flex: 1, fontFamily:FONTS.regular, fontSize: SIZES.font, }}
                  />
              </View>
            </View>

            <View style={{marginTop:20}}>
              <Text style={{fontFamily:FONTS.medium}}>Birth Date</Text>
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
                  <TextInput
                      value='07.21.1984'
                      style={{ flex: 1, fontFamily:FONTS.regular, fontSize: SIZES.font, }}
                  />
              </View>
            </View>
            
            <View style={{marginTop:20}}>
              <Text style={{fontFamily:FONTS.medium}}>Password</Text>
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
                  <TextInput
                      value='abc123'
                      style={{ flex: 1, fontFamily:FONTS.regular, fontSize: SIZES.font, }}
                      secureTextEntry
                  />
              </View>
            </View>

            <TouchableOpacity style={{width: '100%',}}  onPress={() => navigation.navigate("Login")}>
              <View style={{
                  backgroundColor:COLORS.primary, 
                  borderRadius:8, 
                  paddingHorizontal:15, 
                  paddingVertical:10, 
                  justifyContent:'center', 
                  alignItems:'center',
                  marginTop:20,
                  
              }}>
                  <Text style={{color:COLORS.white,fontFamily:FONTS.medium}}>Logout</Text>
              </View>     
          </TouchableOpacity>
          </View>
      </ScrollView>
    </SafeAreaView>
    
  )
}

export default ProfileScreen