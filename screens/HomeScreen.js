import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, FlatList, ScrollView } from 'react-native';
import FocusedStatusBar from '../components/FocusedStatusBar';
import HomeHeader from '../components/HomeHeader';
import Category from '../components/Category';
import { COLORS, FONTS, SIZES } from "../constants";
import FeaturedRow from '../components/FeaturedRow';
import { useNavigation } from '@react-navigation/native';
import sanityClient from '../sanity';


const HomeScreen = () => {

  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useEffect(() => {
    sanityClient.fetch(
      `
        *[_type == "featured"]{
          ...,
          recipes[]->
        }
      `
    )
    .then((data) => {
      setFeaturedCategories(data);
    })
  }, [])


  return (
    <SafeAreaView style={{backgroundColor:COLORS.white, height:'100%',padding: SIZES.large,}}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />  
        <ScrollView showsVerticalScrollIndicator={false}>      
        <HomeHeader/>
        <View style={{marginTop:SIZES.large}}>
          <Category/>
        </View>

        <View style={{marginTop:SIZES.large}}>
          {featuredCategories?.map(category => (
            <FeaturedRow
              key={category._id}
              id={category._id}
              title={category.name}
              description={category.short_description}
            />
          ))}
        </View>
        
      </ScrollView>      
    </SafeAreaView>
  )
}

export default HomeScreen