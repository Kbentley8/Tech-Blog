'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'user',
      'email'
    );
    
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'user',
      'email',
      Sequelize.DataTypes.STRING
    );
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
// module.exports = {
//   up: function(queryInterface, Sequelize) {
//     // logic for transforming into the new state
//     return queryInterface.addColumn(
//       'Todo',
//       'completed',
//      Sequelize.BOOLEAN
//     );

//   },

//   down: function(queryInterface, Sequelize) {
//     // logic for reverting the changes
//     return queryInterface.removeColumn(
//       'Todo',
//       'completed'
//     );
//   }
// }