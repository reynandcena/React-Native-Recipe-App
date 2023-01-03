import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { COLORS, SIZES, SHADOWS, FONTS } from "./constants";
import { useNavigation } from '@react-navigation/native';

const Onboarding = () => {

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Swiper autoplay={false}>
                {/* Slide1 */}
                <View style={styles.slide}>
                    <Image 
                        source={require('./assets/images/onboarding/1.png')} 
                        style={styles.image}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.headingText}>Find Recipes</Text>
                        <Text style={styles.subHeadingText}>Discover hundreds of Filipino recipes</Text>
                    </View>               
                </View>

                {/* Slide2 */}
                <View style={styles.slide}>
                    <Image 
                        source={require('./assets/images/onboarding/2.png')} 
                        style={styles.image}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.headingText}>Easy and Quick Recipes</Text>
                        <Text style={styles.subHeadingText}>Get the recent, popular, and simple home made recipes</Text>
                    </View>                      
                </View>

                {/* Slide3 */}
                <View style={styles.slide}>
                    <Image 
                        source={require('./assets/images/onboarding/3.png')} 
                        style={styles.image}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.headingText}>Watch and Save Recipes</Text>
                        <Text style={{fontFamily:FONTS.regular, fontSize:SIZES.font, textAlign:'center', marginBottom:10}}>
                            Save and share your favorite recipes with your friends and family.
                        </Text>
                    </View> 
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <View style={{
                            backgroundColor:COLORS.primary, 
                            borderRadius:8, 
                            paddingHorizontal:15, 
                            paddingVertical:10, 
                            justifyContent:'center', 
                            alignItems:'center',
                            marginTop:20
                        }}>
                            <Text style={{color:COLORS.white,fontFamily:FONTS.medium}}>Get Started!</Text>
                        </View>     
                    </TouchableOpacity>
                </View>
            </Swiper>
        </View>
        
    )
  }
  
  export default Onboarding

 

const styles = StyleSheet.create({

    container:{
        flex:1
    },

    slide:{
        alignItems: 'center',
        justifyContent:'center',
        padding:20
    },

    image:{
        width: '80%',
        height: '80%',
        resizeMode:'contain',
    },

    textContainer:{
        justifyContent:'center', 
        alignItems:'center',
        marginTop:-60
    },

    headingText:{
        fontFamily:FONTS.extraBold, 
        fontSize:SIZES.extraLarge, 
        textTransform:'uppercase',
        textAlign:'center', 
        marginBottom:10,
        color: COLORS.primary
    },

    subHeadingText:{
        fontFamily:FONTS.regular, 
        fontSize:SIZES.font,
        textAlign:'center', 
        marginBottom:10,
        color: COLORS.black
    }

})
