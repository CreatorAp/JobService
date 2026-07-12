"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Job_1 = __importDefault(require("../../../../Domain/Entity/Job"));
class CreateJobHandler {
    repository;
    eventBus;
    constructor(repository, eventBus) {
        this.repository = repository;
        this.eventBus = eventBus;
    }
    handle(command) {
        console.log("Antes do publish");
        var job = new Job_1.default(command.Cnpj, command.RazaoSocial, command.EmailRecrutador, command.NomeRecrutador, command.CelularRecrutador, command.TipoVaga, command.Cargo, command.NumeroVagas, command.TipoEstabelecimento, command.DescricaoEmpresa, command.FormaTrabalho, command.Cidade, command.Bairro, command.DescricaoCargo, 1, command.CaracteristicasComportamentais, command.FormaRemuneracao, "", command.JornadaTrabalhoCargo, command.FormaRecebimentoCurriculo, command.EmailRecebimentoCurriculo);
        this.repository.create(job);
        console.log("PAssou repositorio");
        //         var jobCreated = new JobCreatedEvent(
        //                         command.Cnpj,
        //             command.RazaoSocial,
        //             command.EmailRecrutador,
        //             command.NomeRecrutador,
        //             command.CelularRecrutador,
        //             command.TipoVaga,
        //             command.Cargo,
        //             command.NumeroVagas,
        //             command.TipoEstabelecimento,
        //             command.DescricaoEmpresa,
        //             command.FormaTrabalho,
        //             command.Cidade,
        //             command.Bairro,
        //             command.DescricaoCargo,
        //             1,
        //             command.CaracteristicasComportamentais,
        //             command.FormaRemuneracao,
        //             command.Beneficios,            
        //             command.JornadaTrabalhoCargo,
        //             command.FormaRecebimentoCurriculo,
        //             command.EmailRecebimentoCurriculo
        //         );
        // console.log("Antes do publish");
        //         this.eventBus.publish("job.created", jobCreated);
        console.log("depois do publish");
    }
}
exports.default = CreateJobHandler;
//# sourceMappingURL=CreateJobHandler.js.map