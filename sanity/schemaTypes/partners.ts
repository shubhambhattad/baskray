export default {
  name: "partner",
  title: "Partner",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Partner Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "logo",
      title: "Partner Logo",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      validation: (Rule: any) => Rule.required().min(1),
    },
  ],
};
