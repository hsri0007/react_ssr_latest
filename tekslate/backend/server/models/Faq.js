import { Model } from "sequelize";

// const PROTECTED_ATTRIBUTES = ['password'];

export default (sequelize, DataTypes) => {
  class FAQModel extends Model {
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
  FAQModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      course_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      faq_title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      faq_description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      f_status: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      // modelName: 'course',
      timestamps: false,
      tableName: "faq",
    }
  );
  return FAQModel;
};
