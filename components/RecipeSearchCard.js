import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS, FONTS, SHADOWS, SIZES } from '../constants';
import { urlFor } from '../sanity';
import { Octicons, MaterialCommunityIcons, Ionicons, Feather  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const RecipeSearchCard = ({
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
}) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={{
            justifyContent:'center', 
            alignItems:'center',
        }}
        onPress={()=>{
            navigation.navigate('RecipeScreen', {
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
            })
        }}
        >
            <View style={{
                marginBottom:10, 
                marginTop:15, 
                flexDirection:'row', 
                alignItems:'center',
                backgroundColor:COLORS.white,
                ...SHADOWS.light,
                borderRadius:8,
                padding:5,
                flex:1,
                width:'100%'
            }}>
                <Image
                    source={{ uri: urlFor(imgUrl).url(), }}
                    style={{
                    width: 150,
                    height: 100,
                    borderRadius: 8,
                    position:'relative'
                    }}
                />
                <TouchableOpacity style={{
                    position:'absolute',
                    top:10,
                    left:10,                
                }}>
                    <Feather name="bookmark" size={16} style={{color:COLORS.primary, backgroundColor:COLORS.input, borderRadius:100,padding:4}} />
                </TouchableOpacity>

                <View style={{marginLeft:10}}>
                    <Text style={{fontFamily:FONTS.semiBold}}>{title}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <Octicons name="star-fill" size={18} style={{ color: COLORS.primary, marginRight: 5 }} />
                        <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.small, color: COLORS.gray }}>
                            <Text style={{ fontFamily: FONTS.medium, }}>{rating}</Text> - {category}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
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
            </View>
        </TouchableOpacity>
    )
}

export default RecipeSearchCard