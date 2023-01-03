import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, SafeAreaView, TextInput } from "react-native";
import FocusedStatusBar from "../components/FocusedStatusBar";
import { COLORS, FONTS, SIZES } from "../constants";
import sanityClient, { urlFor } from "../sanity";
import { Ionicons } from "@expo/vector-icons";
import RecipeSearchCard from "../components/RecipeSearchCard";

const CategoryScreen = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `
            *[_type == "recipe"] | order(_createdAt asc) {
              ...,
              type->{
                  categoryName
              }
          }
        `
      )
      .then((data) => {
        setRecipes(data);
      });
  }, []);
  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.white,
        height: "100%",
        padding: SIZES.large,
      }}
    >
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.extraLarge,
            color: COLORS.black,
            marginTop: SIZES.base / 2,
            width: "80%",
          }}
        >
          Find the best recipes for cooking
        </Text>
        <View
          style={{ marginTop: SIZES.font, marginTop: 10, marginBottom: 10 }}
        >
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
            <Ionicons
              name="search"
              size={24}
              style={{ marginRight: SIZES.base, color: COLORS.gray }}
            />
            <TextInput
              placeholder="Search for a recipe"
              style={{
                flex: 1,
                fontFamily: FONTS.regular,
                fontSize: SIZES.font,
              }}
            />
          </View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {recipes?.map((recipe) => (
          <RecipeSearchCard
            key={recipe._id}
            id={recipe._id}
            imgUrl={recipe.image}
            title={recipe.name}
            rating={recipe.rating}
            prepTime={recipe.prepTime}
            cookTime={recipe.cookTime}
            description={recipe.description}
            category={recipe.type?.categoryName}
            ingredients={recipe.ingredients}
            steps={recipe.steps}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryScreen;
