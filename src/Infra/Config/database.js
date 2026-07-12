"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sql = void 0;
exports.getConnection = getConnection;
const mssql_1 = __importDefault(require("mssql"));
exports.sql = mssql_1.default;
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
var pool = null;
async function getConnection() {
    try {
        if (pool)
            return pool;
        pool = await mssql_1.default.connect(config);
        //
        const result = await pool.request().query(`SELECT DB_NAME() AS Banco;`);
        console.log(result.recordset);
        console.log("Conectado ao SQL Server");
        return pool;
    }
    catch (err) {
        console.error("Erro ao conectar:", err);
        throw err;
    }
}
//# sourceMappingURL=database.js.map