import sql from "mssql";

const config = {
     user: "sa",
     password: "123",
    server: "localhost\\SQLEXPRESS",
    database: "jobs",
    //port: Number(process.env.DB_PORT) || 1433,

    options: {
        encrypt: false, // true se estiver usando Azure
        //trustConnection: true,
        trustServerCertificate: true
    },

    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
};

//const pool = null;
var pool : any = null;

export async function getConnection() {
    try {
        if (pool) return pool;

        pool = await sql.connect(config);

        //
        const result = await pool.request().query(`SELECT DB_NAME() AS Banco;`);
        console.log(result.recordset);

        console.log("Conectado ao SQL Server");

        return pool;
    } catch (err) {
        console.error("Erro ao conectar:", err);
        throw err;
    }
}

export { sql };