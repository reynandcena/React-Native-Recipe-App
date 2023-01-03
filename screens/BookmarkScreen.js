import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TextInput } from 'react-native';
import FocusedStatusBar from '../components/FocusedStatusBar';
import { COLORS, FONTS, SIZES } from "../constants";
import sanityClient, { urlFor } from '../sanity';
import { Ionicons } from '@expo/vector-icons'; 
import RecipeSearchCard from '../components/RecipeSearchCard';

const BookmarkScreen = () => {
    const [recipes, setRecipes] = useState([]);

      useEffect(() => {
        sanityClient.fetch(`
            *[_type == "recipe"] | order(_createdAt asc) {
              ...,
              type->{
                  categoryName
              }
          }
        `)
        .then((data) => {
          setRecipes(data);
        })
    }, [])

    return (
      <SafeAreaView style={{backgroundColor:COLORS.white, height:'100%',padding: SIZES.large,}}>
        <FocusedStatusBar backgroundColor={COLORS.primary} />  
        <View>
          <Text
            style={{
              fontFamily: FONTS.bold,
              fontSize: SIZES.extraLarge,
              color: COLORS.black,
              marginTop: SIZES.base / 2,
              width:'80%'
            }}
          >
            My bookmarks
          </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          { recipes?.map(recipe => (
              <RecipeSearchCard
                  key={recipe._id}
                  id={recipe._id}
                  imgUrl={recipe.image}
                  title={recipe.name}
                  rating = {recipe.rating}
                  prepTime = {recipe.prepTime}
                  cookTime = {recipe.cookTime}
                  description = {recipe.description}
                  category = {recipe.type?.categoryName}
                  ingredients={recipe.ingredients}
                  steps={recipe.steps}
              />
          ))}
        </ScrollView>
      </SafeAreaView>
    )
}

export default BookmarkScreen