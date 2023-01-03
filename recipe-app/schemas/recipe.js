export default {
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Recipe name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      type: "image",
      title: "Recipe image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      type: "number",
      title: "Rating",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error("Please enter a value between 1 and 5"),
    },
    {
      name: "prepTime",
      type: "string",
      title: "Prep time",
    },
    {
      name: "cookTime",
      type: "string",
      title: "Cook time",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      name: "type",
      title: "Category",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }]
    },
    {
      name: "ingredients",
      title: "Ingredients",
      type: "array",
      of: [{ type: "string" }]
    },
    {
      name: "steps",
      type: "text",
      title: "Steps",
    }
  ],

}
