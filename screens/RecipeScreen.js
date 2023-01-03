import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import { Feather, Octicons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'; 
import { COLORS, FONTS, SHADOWS, SIZES } from '../constants';
import { useNavigation } from '@react-navigation/native';


const RecipeScreen = () => {

    const navigation = useNavigation();

    const {params:{
        id,
        imgUrl,
        title,
        rating,
        prepTime,
        cookTime,
        description,
        category,
        ingredients,
        steps
    }} = useRoute();

    return (
        <ScrollView style={{backgroundColor:COLORS.white}} showsVerticalScrollIndicator={false}>
            <View style={{position:'relative'}}>
                <Image
                    source={{
                        uri: urlFor(imgUrl).url(),
                    }}
                    resizeMode='cover'
                    style={{
                        width: '100%',
                        height:230,
                    }}
                />
                <TouchableOpacity style={{
                    position:'absolute',
                    top:14,
                    right:10,
                    
                }}>
                    <Feather name="bookmark" size={24} style={{color:COLORS.primary, backgroundColor:COLORS.input, borderRadius:100,padding:4}} />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{
                        position:'absolute', 
                        top:14, 
                        left:10
                    }}
                    onPress={()=>{
                        navigation.goBack();
                    }}
                >
                    <Feather 
                    name="arrow-left-circle" 
                    size={28} 
                    style={{
                        color:COLORS.primary, 
                        backgroundColor:COLORS.input, 
                        borderRadius:100
                    }} 
                    />
                </TouchableOpacity>
            </View>
            <View style={{
                backgroundColor:COLORS.white,
                width:"90%",
                flex:1,
                alignSelf:'center',
                padding:20,
                borderRadius:8,
                alignItems:'center',
                position:'relative',
                top:-40,
                ...SHADOWS.light
            }}>
                <Text style={{fontFamily:FONTS.bold, fontSize:SIZES.large, textAlign:'center'}}>{title}</Text>
                <Text style={{fontFamily:FONTS.medium, fontSize:SIZES.font, textAlign:'center',marginBottom:5, color:COLORS.primary,fontStyle:'italic'}}>{category}</Text>
                <Text style={{fontFamily:FONTS.regular, fontSize:SIZES.font, textAlign:'center'}}>{description}</Text>

                <View 
                    style={{width:'100%', backgroundColor:COLORS.input, height:1, marginTop:15, marginBottom:15}}
                />

                <View style={{ flexDirection: 'row', alignItems:'center', justifyContent:'space-between', width:"90%"}}>

                    <View style={{ flexDirection: 'row', alignItems: 'center',}}>
                        <Octicons name="star-fill" size={18} style={{ color: COLORS.primary, marginRight: 5 }} />
                        <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.small, color: COLORS.gray }}>
                            <Text style={{ fontFamily: FONTS.medium, }}>{rating}</Text>
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
                        <MaterialCommunityIcons name="knife" size={18} style={{ color: COLORS.gray, marginRight: 5 }} />
                        <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.small, color: COLORS.gray }}>
                        <Text style={{ fontFamily: FONTS.medium, }}>{prepTime}</Text>
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="time-sharp" size={18} style={{ color: COLORS.gray, marginRight: 5 }} />
                        <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.small, color: COLORS.gray }}>
                        <Text style={{ fontFamily: FONTS.medium, }}>{cookTime}</Text>
                        </Text>
                    </View>

                </View>
            </View>

            <View style={{paddingLeft:20, paddingRight:20, marginTop:-20}}>
                <Text style={{fontFamily:FONTS.bold, fontSize:SIZES.large}}>Ingredients</Text>
                <>
                    {
                        ingredients?.map((ingredient) =>{
                            return(
                                <>
                                    <View style={{paddingTop:10,paddingBottom:10}}>
                                        <Text style={{fontFamily:FONTS.regular, fontSize:SIZES.font}}>{ingredient}</Text>
                                    </View>
                                </>
                            )
                        })
                    }
                </>                
            </View>

            <View style={{paddingLeft:20, paddingRight:20, marginTop:20}}>
                <Text style={{fontFamily:FONTS.bold, fontSize:SIZES.large}}>Cooking Instructions</Text>    
                <Text style={{fontFamily:FONTS.regular, fontSize:SIZES.font, marginTop:15,marginBottom:15}}>{steps}</Text>            
            </View>

            
        </ScrollView>
    )
}

export default RecipeScreen