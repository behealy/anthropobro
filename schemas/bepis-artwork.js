export default {
    name: 'bepis-artwork',
    title: 'Bepis Artwork',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug'
        },
        {
            name: 'mainImages',
            type: 'array',
            title: 'Main Images',
            description: 'This is a list of images. Usually, if it is more than one, it is because it is a set of images belonging to a comic or other multipane type of work.',
            of: [
                {
                    name: 'main_image',
                    title: 'Main Image',
                    type: 'image',
                    options: {
                        hotspot: true
                    }
                }
            ]
        }, 
        {
            name: 'thumbs',
            type: 'array',
            title: 'Thumbs',
            of: [{
                type: 'image',
                options: {
                    hotspot: true
                }
            }]
        },
        {
            name: 'categories',
            type: 'array',
            title: 'Categories',
            description: 'For future use, in case I want to sort by some sort of artwork categories',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            }
        }
    ]
}