const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');


User.hasMany(Post, {
    foreignKey: 'User_id'
})

User.hasMany(Comment, {
    foreignKey: 'User_id'
})

Post.belongsTo(User, {
    foreignKey: 'User_id'
})

Post.hasMany(Comment, {
    foreignKey: 'blogpost_id'
})

Comment.belongsTo(User, {
    foreignKey: 'User_id'
})

Comment.belongsTo(Post, {
    foreignKey: 'blogpost_id'
})


module.exports = {
    User,
    Post,
    Comment
};