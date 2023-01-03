import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONTS, SIZES } from "../constants";
import RecipeCard from "./RecipeCard";
import sanityClient from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
            *[_type == "featured" && _id == $id]{
                ...,
                recipes[]->{
                    ...,
                    type->{
                        categoryName
                    }
                }
            }[0]
        `,
        { id }
      )
      .then((data) => {
        setRecipes(data?.recipes);
      });
  }, [id]);

  return (
    <View style={{ marginBottom: SIZES.extraLarge }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.medium }}>
          {title}
        </Text>
        <Ionicons
          name="arrow-forward"
          size={20}
          style={{ color: COLORS.primary }}
        />
      </View>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.gray,
          paddingBottom: SIZES.large,
        }}
      >
        {description}
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Recipe Cards  */}

        {recipes?.map((recipe) => (
          <RecipeCard
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
    </View>
  );
};

export default FeaturedRow;
