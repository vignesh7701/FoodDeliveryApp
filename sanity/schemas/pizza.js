export default{
    name: 'pizza',
    title: "pizza",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 100,
            },
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "price",
            title: "Price",
            type: "array",
            of: [{type: "number"}],
        },
        {
            name: "details",
            title: "Details",
            type: "string",
        },
    ],
}