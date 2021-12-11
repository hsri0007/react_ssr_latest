import { Model } from "sequelize";

// const PROTECTED_ATTRIBUTES = ['password'];

export default (sequelize, DataTypes) => {
  class SubcategoryModel extends Model {
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
  SubcategoryModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      category: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      sub_category: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      page_title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      meta_title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      url_title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      meta_desc: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      keywords: {
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
      tableName: "sub_category",
    }
  );
  return SubcategoryModel;
};
