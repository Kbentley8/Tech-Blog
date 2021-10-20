const { User } = require('../models');

const userData = [
    {
        username: 'kbentley7',
        email: 'kbentley7@gmail.com',
        password: '12345'
    },
    {
        username: 'kiki420',
        email: 'kiki420@gmail.com',
        password: 'abcde'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;