import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { COLORS, FONTS, SIZES, assets } from "../constants";

const HomeHeader = ({ onSearch }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: 'flex-end',
          alignItems: "center",
        }}
      >
        
        <View style={{ width: 45, height: 45 }}>
          <Image
            source={assets.avatar}
            resizeMode="contain"
            style={{ width: "100%", height: "100%", borderRadius: 100,}}
          />
        </View>
      </View>

      <View>
        <Text
          style={{
            fontFamily: FONTS.medium,
            fontSize: SIZES.font,
            color: COLORS.black,
          }}
        >
          Hello John! 👋
        </Text>

        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.extraLarge,
            color: COLORS.black,
            marginTop: SIZES.base / 2,
            width:'80%'
          }}
        >
          Find the best recipes for cooking
        </Text>
      </View>
      
      
  </View>

  )
}

export default HomeHeader