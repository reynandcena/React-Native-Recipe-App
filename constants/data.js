import assets from "./assets";

const RecipeData = [
    {
        id: "cat-01",
        name: "All",
        image: assets.all,
        recipes: [
            {
                id: "rec-01",
                name: "Adobong Manok",
                image: assets.adobongManok,
                rating: "4.8",
                prepTime: "5 mins",
                cookTime: "35 mins",
                ingredients: [
                    {
                        id: "ing-01",
                        name: "2 lbs chicken cut into serving pieces"
                    },
                    {
                        id: "ing-02",
                        name: "3 pieces dried bay leaves",
                    },
                    {
                        id: "ing-03",
                        name: "8 tablespoons soy sauce"
                    },
                    {
                        id: "ing-04",
                        name: "4 tablespoons white vinegar",
                    },
                    {
                        id: "ing-05",
                        name: "5 cloves garlic crushed",
                    },
                    {
                        id: "ing-06",
                        name: "1 1/2 cups water",
                    },
                    {
                        id: "ing-07",
                        name: "3 tablespoons cooking oil",
                    },
                    {
                        id: "ing-08",
                        name: "1 teaspoon sugar",
                    },
                    {
                        id: "ing-09",
                        name: "1/4 teaspoon salt optional",
                    },
                    {
                        id: "ing-10",
                        name: "1 teaspoon whole peppercorn",
                    },                    
                ],
                instructions: [
                    {
                        id:"ins-01",
                        name: "1. Combine chicken, soy sauce, and garlic in a large bowl. Mix well. Marinate the chicken for at least 1 hour. Note: the longer the time, the better"
                    },
                    {
                        id:"ins-02",
                        name: "2. Heat a cooking pot. Pour cooking oil."
                    },
                    {
                        id:"ins-03",
                        name: "3. When the oil is hot enough, pan-fry the marinated chicken for 2 minutes per side."
                    },
                    {
                        id:"ins-04",
                        name: "4. Pour-in the remaining marinade, including garlic. Add water. Bring to a boil. "
                    },
                    {
                        id:"ins-05",
                        name: "5. Add dried bay leaves and whole peppercorn. Simmer for 30 minutes or until the chicken gets tender"
                    },
                    {
                        id:"ins-06",
                        name: "6. Add vinegar. Stir and cook for 10 minutes."
                    },
                    {
                        id:"ins-07",
                        name: "7. Put-in the sugar, and salt. Stir and turn the heat off.Serve hot. Share and Enjoy!"
                    }
                    
                ]
            }
        ]
    },
    {
        id: "cat-02",
        name: "Chicken",
        image: assets.chicken,
    },
    {
        id: "cat-03",
        name: "Pork",
        image: assets.pork,
    },
    {
        id: "cat-04",
        name: "Beef",
        image: assets.beef,
    },
    {
        id: "cat-05",
        name: "Seafoods",
        image: assets.seafoods,
    },
    {
        id: "cat-06",
        name: "Vegetables",
        image: assets.vegetables,
    },
    {
        id: "cat-07",
        name: "Pasta",
        image: assets.pasta,
    },
    {
        id: "cat-08",
        name: "Soup",
        image: assets.soup,
    },
    {
        id: "cat-09",
        name: "Soup",
        image: assets.soup,
    },
    {
        id: "cat-10",
        name: "Dessert",
        image: assets.dessert,
    },
    {
        id: "cat-11",
        name: "Breads",
        image: assets.bread,
    },
    {
        id: "cat-12",
        name: "Others",
        image: assets.others,
    },

];

export { RecipeData };