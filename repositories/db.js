import pg from "pg";

async function connect() {
    if(global.connection) {
        return global.connection.connect();
    }
    const pool = new pg.Pool({
        connectionString: "postgres://ftqrlfih:mTioA6CU-4jU1kTFRUX6WuokztRs0_2C@batyr.db.elephantsql.com/ftqrlfih"
    });

    global.connection = pool;

    return pool.connect();
};

export {
    connect
};