export default {
  name: 'featured',
  title: 'Feature Recipe Categories',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Featured Category name',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.max(300)
    },
    {
      name: 'recipes',
      title: 'Recipes',
      type: 'array',
      of: [{
        type: "reference", to: [{ type: "recipe" }]
      }]
    },
  ]
}
