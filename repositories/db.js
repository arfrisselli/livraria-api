import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "postgres://ftqrlfih:mTioA6CU-4jU1kTFRUX6WuokztRs0_2C@batyr.db.elephantsql.com/ftqrlfih",
  {
    dialect: "postgres",
    define: {
      timestamps: false,
    },
  }
);

export default sequelize;
