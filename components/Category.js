import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, SIZES, SHADOWS, assets, FONTS } from '../constants';
import sanityClient, { urlFor } from '../sanity';
import CategoryCard from './CategoryCard';


const Category = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        sanityClient.fetch(`
            *[_type == "category"] | order(_createdAt asc)
        `)
        .then((data) => {
            setCategories(data);
        })
    }, [])
    
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
        >        

            {categories.map((category) => (
                <CategoryCard
                    key={category._id}
                    id={category._id}
                    imgUrl = {urlFor(category.image).url()}
                    title = {category.categoryName}
                />
            ))}
            
        </ScrollView>
        
    )
}

export default Category