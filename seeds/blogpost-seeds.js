const { BlogPost } = require('../models');

const blogpostData = [
    {
        title: 'My first post',
        content: 'This is the content of post 1',
        user_id: 1 
    },
    {
        title: 'My second post',
        content: 'This is the content of post one from user 2',
        user_id: 2
    },
    {
        title: 'My third post',
        content: 'this is a third post of the tech blog',
        user_id: '1'
    }
];

const seedBlogPosts = () => BlogPost.bulkCreate(blogpostData);

module.exports = seedBlogPosts;