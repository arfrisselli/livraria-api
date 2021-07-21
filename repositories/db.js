import Sequelize from "sequelize";

const sequelize = new Sequelize(
    "postgres://popgvalt:TmPUHseepVvAPYVxKHdsCN9GWrjBqVDQ@batyr.db.elephantsql.com/popgvalt",
    {
        dialect: "postgres",
        define: {
            timestamps: false
        }
    }
);

export default sequelize;