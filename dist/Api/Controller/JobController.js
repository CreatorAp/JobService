"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateJobCommand_1 = __importDefault(require("../../Application/Jobs/Commands/CreateJob/CreateJobCommand"));
class JoBController {
    mediator;
    constructor(mediator) {
        this.mediator = mediator;
    }
    async CreateJob(req, res) {
        console.log("Chegou");
        console.log("CONTROLLER MEDIATOR", this.mediator);
        var command = new CreateJobCommand_1.default(req.body.cnpj, req.body.razaoSocial, req.body.emailRecrutador, req.body.nomeRecrutador, req.body.celularRecrutador, 
        // req.body.tipoVaga,
        0, req.body.cargo, req.body.numeroVagas, req.body.tipoEstabelecimento, req.body.descricaoEmpresa, req.body.formaTrabalho, req.body.cidade, req.body.bairro, req.body.descricaoCargo, 
        //req.body.FormacaoExperiencia,
        1, req.body.caracteristicasComportamentais, req.body.formaRemuneracao, req.body.beneficios, req.body.jornadaTrabalhoCargo, req.body.formaRecebimentoCurriculo, req.body.emailRecebimentoCurriculo);
        console.log("Antes do publishhhhh");
        console.log(req.body);
        console.log(command);
        var result = await this.mediator.send(command);
        return res.status(201).json(result);
    }
}
exports.default = JoBController;
//# sourceMappingURL=JobController.js.map