export default {
    // Artwork maybe for a different site. 
    name: 'artwork',
    title: 'Artwork',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
    
        {
            name: 'mainImage',
            type: 'image',
            title: 'Main Image',
        },
     
        {
            name: 'thumb',
            type: 'image',
            title: 'Thumb',
            options: {
                hotspot: true
            }
        },
        {
            name: 'categories',
            type: 'array',
            title: 'Categories',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            }
        }
    ]
}