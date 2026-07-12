"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../Config/database");
class JobRepository {
    async create(job) {
        console.log('reposiorio', job.Cargo);
        console.log(JSON.stringify(job, null, 2));
        const conn = await (0, database_1.getConnection)();
        const result1 = await conn.request()
            .input("Cargo", database_1.sql.VarChar, job.Cargo)
            .query(`
        SELECT @Cargo AS Cargo
    `);
        console.log("resultado record set", result1.recordset);
        //             const result = await conn.request()
        //         .input("Cargo", sql.VarChar, "TI")
        //         .input("FormacaoExperiencia", sql.Int, 99)
        //         .input("EmailRecebimentoCurriculo", sql.VarChar, "teste@teste.com")
        //         .query(`
        //             INSERT INTO dbo.Jobs
        //             (
        //                 Cargo,
        //                 FormacaoExperiencia,
        //                 EmailRecebimentoCurriculo
        //             )
        //             VALUES
        //             (
        //                 @Cargo,
        //                 @FormacaoExperiencia,
        //                 @EmailRecebimentoCurriculo
        //             )
        //         `);
        // const info = await conn.request().query(`
        // SELECT
        //     @@SERVERNAME AS Servidor,
        //     DB_NAME() AS Banco,
        //     SCHEMA_NAME() AS SchemaAtual
        // `);
        // console.log(info.recordset);
        //     console.log("Rows affected:", result.rowsAffected);
        await conn.request()
            .input("Cnpj", database_1.sql.VarChar, job.Cnpj)
            .input("RazaoSocial", database_1.sql.VarChar, job.RazaoSocial)
            .input("EmailRecrutador", database_1.sql.VarChar, job.EmailRecrutador)
            .input("NomeRecrutador", database_1.sql.VarChar, job.NomeRecrutador)
            .input("CelularRecrutador", database_1.sql.VarChar, job.CelularRecrutador)
            .input("TipoVaga", database_1.sql.Int, job.TipoVaga)
            .input("Cargo", database_1.sql.VarChar, job.Cargo)
            .input("NumeroVagas", database_1.sql.Int, job.NumeroVagas)
            .input("TipoEstabelecimento", database_1.sql.VarChar, job.TipoEstabelecimento)
            .input("DescricaoEmpresa", database_1.sql.VarChar, job.DescricaoEmpresa)
            .input("FormaTrabalho", database_1.sql.Int, job.FormaTrabalho)
            .input("Cidade", database_1.sql.VarChar, job.Cidade)
            .input("Bairro", database_1.sql.VarChar, job.Bairro)
            .input("DescricaoCargo", database_1.sql.VarChar, job.DescricaoCargo)
            .input("FormacaoExperiencia", database_1.sql.Int, job.FormacaoExperiencia)
            .input("CaracteristicasComportamentais", database_1.sql.VarChar, job.CaracteristicasComportamentais)
            .input("FormaRemuneracao", database_1.sql.Int, job.FormaRemuneracao)
            // .input("Beneficios", sql.VarChar, job.Beneficios)
            .input("JornadaTrabalhoCargo", database_1.sql.Int, job.JornadaTrabalhoCargo)
            .input("FormaRecebimentoCurriculo", database_1.sql.Int, job.FormaRecebimentoCurriculo)
            .input("EmailRecebimentoCurriculo", database_1.sql.VarChar, job.EmailRecebimentoCurriculo)
            .query(`
                INSERT INTO dbo.Jobs (
                    Cnpj,
                    RazaoSocial,
                    EmailRecrutador,
                    NomeRecrutador,
                    CelularRecrutador,
                    TipoVaga,
                    Cargo,
                    NumeroVagas,
                    TipoEstabelecimento,
                    DescricaoEmpresa,
                    FormaTrabalho,
                    Cidade,
                    Bairro,
                    DescricaoCargo,
                    FormacaoExperiencia,
                    CaracteristicasComportamentais,
                    FormaRemuneracao,
                    
                    JornadaTrabalhoCargo,
                    FormaRecebimentoCurriculo,
                    EmailRecebimentoCurriculo
                )
                VALUES (
                    @Cnpj,
                    @RazaoSocial,
                    @EmailRecrutador,
                    @NomeRecrutador,
                    @CelularRecrutador,
                    @TipoVaga,
                    @Cargo,
                    @NumeroVagas,
                    @TipoEstabelecimento,
                    @DescricaoEmpresa,
                    @FormaTrabalho,
                    @Cidade,
                    @Bairro,
                    @DescricaoCargo,
                    @FormacaoExperiencia,
                    @CaracteristicasComportamentais,
                    @FormaRemuneracao,
                    
                    @JornadaTrabalhoCargo,
                    @FormaRecebimentoCurriculo,
                    @EmailRecebimentoCurriculo
                )
            `);
        return job;
    }
    async getById(cnpj) {
        const conn = await (0, database_1.getConnection)();
        const result = await conn.request()
            .input("Cnpj", database_1.sql.VarChar, cnpj)
            .query(`
                SELECT *
                FROM Jobs
                WHERE Cnpj = @Cnpj
            `);
        return result.recordset[0];
    }
    async update(cnpj, job) {
        const conn = await (0, database_1.getConnection)();
        const result = await conn.request()
            .input("Cnpj", database_1.sql.VarChar, cnpj)
            .input("RazaoSocial", database_1.sql.VarChar, job.RazaoSocial)
            .input("EmailRecrutador", database_1.sql.VarChar, job.EmailRecrutador)
            .input("NomeRecrutador", database_1.sql.VarChar, job.NomeRecrutador)
            .input("CelularRecrutador", database_1.sql.VarChar, job.CelularRecrutador)
            .input("TipoVaga", database_1.sql.VarChar, job.TipoVaga)
            .input("Cargo", database_1.sql.VarChar, job.Cargo)
            .input("NumeroVagas", database_1.sql.VarChar, job.NumeroVagas)
            .input("TipoEstabelecimento", database_1.sql.VarChar, job.TipoEstabelecimento)
            .input("DescricaoEmpresa", database_1.sql.VarChar, job.DescricaoEmpresa)
            .input("FormaTrabalho", database_1.sql.VarChar, job.FormaTrabalho)
            .input("Cidade", database_1.sql.VarChar, job.Cidade)
            .input("Bairro", database_1.sql.VarChar, job.Bairro)
            .input("DescricaoCargo", database_1.sql.VarChar, job.DescricaoCargo)
            .input("FormacaoExperiencia", database_1.sql.VarChar, job.FormacaoExperiencia)
            .input("CaracteristicasComportamentais", database_1.sql.VarChar, job.CaracteristicasComportamentais)
            .input("FormaRemuneracao", database_1.sql.VarChar, job.FormaRemuneracao)
            .input("Beneficios", database_1.sql.VarChar, job.Beneficios)
            .input("JornadaTrabalhoCargo", database_1.sql.VarChar, job.JornadaTrabalhoCargo)
            .input("FormaRecebimentoCurriculo", database_1.sql.VarChar, job.FormaRecebimentoCurriculo)
            .input("EmailRecebimentoCurriculo", database_1.sql.VarChar, job.EmailRecebimentoCurriculo)
            .query(`
                UPDATE Jobs
                SET
                    RazaoSocial = @RazaoSocial,
                    EmailRecrutador = @EmailRecrutador,
                    NomeRecrutador = @NomeRecrutador,
                    CelularRecrutador = @CelularRecrutador,
                    TipoVaga = @TipoVaga,
                    Cargo = @Cargo,
                    NumeroVagas = @NumeroVagas,
                    TipoEstabelecimento = @TipoEstabelecimento,
                    DescricaoEmpresa = @DescricaoEmpresa,
                    FormaTrabalho = @FormaTrabalho,
                    Cidade = @Cidade,
                    Bairro = @Bairro,
                    DescricaoCargo = @DescricaoCargo,
                    FormacaoExperiencia = @FormacaoExperiencia,
                    CaracteristicasComportamentais = @CaracteristicasComportamentais,
                    FormaRemuneracao = @FormaRemuneracao,
                    Beneficios = @Beneficios,
                    JornadaTrabalhoCargo = @JornadaTrabalhoCargo,
                    FormaRecebimentoCurriculo = @FormaRecebimentoCurriculo,
                    EmailRecebimentoCurriculo = @EmailRecebimentoCurriculo
                WHERE Cnpj = @Cnpj
            `);
        return result.rowsAffected[0];
    }
}
exports.default = JobRepository;
//# sourceMappingURL=JobRepository.js.map