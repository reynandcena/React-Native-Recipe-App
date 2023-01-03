import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS, SIZES, SHADOWS, assets, FONTS } from '../constants';

const Popular = ({recipe}) => {
  return (
    <View>
        <Image
            source={recipe.image}
            resizeMode='cover'
            style={{
                width:150,
                height:150
            }}
        />
    </View>
  )
}

export default Popular