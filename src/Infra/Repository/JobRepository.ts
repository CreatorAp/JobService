import Job from '../../Domain/Entity/Job';
import {sql, getConnection} from '../Config/database'

export default class JobRepository{


    
    async create(job: Job) {
    console.log('reposiorio',job.Cargo);
    console.log(JSON.stringify(job, null, 2));
        const conn = await getConnection();

const result1 = await conn.request()
    .input("Cargo", sql.VarChar, job.Cargo)
    .query(`
        SELECT @Cargo AS Cargo
    `);


console.log("resultado record set",result1.recordset);
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
            .input("Cnpj", sql.VarChar, job.Cnpj)
            .input("RazaoSocial", sql.VarChar, job.RazaoSocial)
            .input("EmailRecrutador", sql.VarChar, job.EmailRecrutador)
            .input("NomeRecrutador", sql.VarChar, job.NomeRecrutador)
            .input("CelularRecrutador", sql.VarChar, job.CelularRecrutador)
            .input("TipoVaga", sql.Int, job.TipoVaga)
            .input("Cargo", sql.VarChar, job.Cargo)
            .input("NumeroVagas", sql.Int, job.NumeroVagas)
            .input("TipoEstabelecimento", sql.VarChar, job.TipoEstabelecimento)
            .input("DescricaoEmpresa", sql.VarChar, job.DescricaoEmpresa)
            .input("FormaTrabalho", sql.Int, job.FormaTrabalho)
            .input("Cidade", sql.VarChar, job.Cidade)
            .input("Bairro", sql.VarChar, job.Bairro)
            .input("DescricaoCargo", sql.VarChar, job.DescricaoCargo)
            .input("FormacaoExperiencia", sql.Int, job.FormacaoExperiencia)
            .input("CaracteristicasComportamentais", sql.VarChar, job.CaracteristicasComportamentais)
            .input("FormaRemuneracao", sql.Int, job.FormaRemuneracao)
            // .input("Beneficios", sql.VarChar, job.Beneficios)
            .input("JornadaTrabalhoCargo", sql.Int, job.JornadaTrabalhoCargo)
            .input("FormaRecebimentoCurriculo", sql.Int, job.FormaRecebimentoCurriculo)
            .input("EmailRecebimentoCurriculo", sql.VarChar, job.EmailRecebimentoCurriculo)
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

    async getById(cnpj: string) {

        const conn = await getConnection();

        const result = await conn.request()
            .input("Cnpj", sql.VarChar, cnpj)
            .query(`
                SELECT *
                FROM Jobs
                WHERE Cnpj = @Cnpj
            `);

        return result.recordset[0];
    }

    async update(cnpj: string, job: Job) {

        const conn = await getConnection();

        const result = await conn.request()
            .input("Cnpj", sql.VarChar, cnpj)
            .input("RazaoSocial", sql.VarChar, job.RazaoSocial)
            .input("EmailRecrutador", sql.VarChar, job.EmailRecrutador)
            .input("NomeRecrutador", sql.VarChar, job.NomeRecrutador)
            .input("CelularRecrutador", sql.VarChar, job.CelularRecrutador)
            .input("TipoVaga", sql.VarChar, job.TipoVaga)
            .input("Cargo", sql.VarChar, job.Cargo)
            .input("NumeroVagas", sql.VarChar, job.NumeroVagas)
            .input("TipoEstabelecimento", sql.VarChar, job.TipoEstabelecimento)
            .input("DescricaoEmpresa", sql.VarChar, job.DescricaoEmpresa)
            .input("FormaTrabalho", sql.VarChar, job.FormaTrabalho)
            .input("Cidade", sql.VarChar, job.Cidade)
            .input("Bairro", sql.VarChar, job.Bairro)
            .input("DescricaoCargo", sql.VarChar, job.DescricaoCargo)
            .input("FormacaoExperiencia", sql.VarChar, job.FormacaoExperiencia)
            .input("CaracteristicasComportamentais", sql.VarChar, job.CaracteristicasComportamentais)
            .input("FormaRemuneracao", sql.VarChar, job.FormaRemuneracao)
            .input("Beneficios", sql.VarChar, job.Beneficios)
            .input("JornadaTrabalhoCargo", sql.VarChar, job.JornadaTrabalhoCargo)
            .input("FormaRecebimentoCurriculo", sql.VarChar, job.FormaRecebimentoCurriculo)
            .input("EmailRecebimentoCurriculo", sql.VarChar, job.EmailRecebimentoCurriculo)
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