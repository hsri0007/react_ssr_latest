import { Model } from "sequelize";

// const PROTECTED_ATTRIBUTES = ['password'];

export default (sequelize, DataTypes) => {
  class AuthorModel extends Model {
    toJSON() {
      // hide protected fields
      const attributes = { ...this.get() };

      return attributes;
    }
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AuthorModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      author_designation: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      author_name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      author_bio: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      author_img: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      author_url: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      // modelName: 'course',
      timestamps: false,
      tableName: "authors",
    }
  );
  return AuthorModel;
};
