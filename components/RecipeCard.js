import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS, FONTS, SHADOWS, SIZES } from "../constants";
import {
  Octicons,
  MaterialCommunityIcons,
  Ionicons,
  Feather,
} from "@expo/vector-icons";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const RecipeCard = ({
  id,
  imgUrl,
  title,
  rating,
  prepTime,
  cookTime,
  description,
  category,
  ingredients,
  steps,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.white,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: COLORS.input,
        marginRight: 10,
      }}
      onPress={() => {
        navigation.navigate("RecipeScreen", {
          id,
          imgUrl,
          title,
          rating,
          prepTime,
          cookTime,
          description,
          category,
          ingredients,
          steps,
        });
      }}
    >
      <Image
        source={{ uri: urlFor(imgUrl).url() }}
        style={{
          width: 250,
          height: 175,
          borderRadius: 8,
          position: "relative",
        }}
      />
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 10,
          right: 10,
        }}
      >
        <Feather
          name="bookmark"
          size={24}
          style={{
            color: COLORS.primary,
            backgroundColor: COLORS.input,
            borderRadius: 100,
            padding: 4,
          }}
        />
      </TouchableOpacity>

      <View
        style={{
          paddingHorizontal: SIZES.large,
          paddingVertical: SIZES.small,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.medium,
            color: COLORS.black,
          }}
        >
          {title}
        </Text>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <Octicons
            name="star-fill"
            size={18}
            style={{ color: COLORS.primary, marginRight: 5 }}
          />
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.small,
              color: COLORS.gray,
            }}
          >
            <Text style={{ fontFamily: FONTS.medium }}>{rating}</Text> -{" "}
            {category}
          </Text>
        </View>

        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 10,
            }}
          >
            <MaterialCommunityIcons
              name="knife"
              size={18}
              style={{ color: COLORS.gray, marginRight: 5 }}
            />
            <Text
              style={{
                fontFamily: FONTS.semiBold,
                fontSize: SIZES.small,
                color: COLORS.gray,
              }}
            >
              <Text style={{ fontFamily: FONTS.medium }}>{prepTime}</Text>
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="time-sharp"
              size={18}
              style={{ color: COLORS.gray, marginRight: 5 }}
            />
            <Text
              style={{
                fontFamily: FONTS.semiBold,
                fontSize: SIZES.small,
                color: COLORS.gray,
              }}
            >
              <Text style={{ fontFamily: FONTS.medium }}>{cookTime}</Text>
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RecipeCard;
