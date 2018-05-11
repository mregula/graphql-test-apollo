import {DataTypes} from "sequelize";

const productsTable = {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sku: {
    type: DataTypes.STRING,
    allowNull: true,
  },
};

export default productsTable;

