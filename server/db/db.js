import Sequelize, { DataTypes } from 'sequelize';

//tables
import productsTable from './tables/product';
import commentsTable from './tables/comment';

const Conn = new Sequelize(
  'graphql-apollo',
  'root',
  'hehe123',
  {
    dialect: 'mysql',
    host: 'localhost'
  }
);

const Product = Conn.define('product', productsTable);
const Comment = Conn.define('comment', commentsTable);
Product.hasMany(Comment, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });

export default Conn;

Conn.sync(/*{force: true}*/).then(() => {
    console.log("TABLES INSTALLED");
});