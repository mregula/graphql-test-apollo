import {DataTypes} from "sequelize";

const commentsTable = {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  likes:  {
    type: DataTypes.INTEGER,
    allowNull: false
  },
};

export default commentsTable;

