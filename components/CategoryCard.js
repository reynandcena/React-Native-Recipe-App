import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, SIZES, SHADOWS, assets, FONTS } from '../constants';
import { useNavigation } from '@react-navigation/native';

const CategoryCard = ({ id, imgUrl, title }) => {
    
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={()=>{navigation.navigate('CategoryScreen', {id})}}>
            <View style={{
                justifyContent:'center',
                alignItems:'center',
                backgroundColor: COLORS.white,
                borderRadius: 8,
                marginBottom: SIZES.extraLarge,
                marginRight: SIZES.font,
                ...SHADOWS.light,
                padding:10
            }}>
                <View style={{ width:100, height: 70, alignItems:'center'}}>
                    <Image
                        source={{
                            uri: imgUrl,
                        }}
                        resizeMode='cover'
                        style={{
                            width:50,
                            height:50
                        }}
                    />
                </View>
                <Text style={{fontFamily:FONTS.medium, fontSize:SIZES.font, color:COLORS.black}}>{title}</Text>
            </View>                
        </TouchableOpacity>
    )
}

export default CategoryCard