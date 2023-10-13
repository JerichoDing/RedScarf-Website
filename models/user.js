const { Sequelize, DataTypes } = require('sequelize')

const user = function (seq) {
    // 新建表user
    const UserModal = seq.define('User', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(255),
      },
      openid: {
        type: DataTypes.STRING(255),
      },
      phone: {
        type: DataTypes.STRING(255),
      },
      password: {
        type: DataTypes.STRING(255),
      },
      createAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updateAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        onUpdate: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      gender: {
        type: DataTypes.STRING(255),
      },
      age: {
        type: DataTypes.INTEGER,
      },
      address: {
        type: DataTypes.STRING(255),
      },
      email: {
        type: DataTypes.STRING(255),
      },
      avatar: {
        type: DataTypes.STRING(255),
      },
      status: {
        type: DataTypes.STRING(255),
      },
      role: {
        type: DataTypes.STRING(255),
      },
      description: {
        type: DataTypes.STRING(255),
      },
      unionid: {
        type: DataTypes.STRING(255),
      },
      source: {
        type: DataTypes.STRING(255),
      },
      sourcefrom: {
        type: DataTypes.STRING(255),
      },
    }, {
      timestamps: false,
      freezeTableName: true,
      autoIncrement: true,
    })
    return UserModal
}

module.exports = user