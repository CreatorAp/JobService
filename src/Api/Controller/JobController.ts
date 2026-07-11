import Mediator from "../../Application/Bus/Mediator";
import CreateJobCommand from "../../Application/Jobs/Commands/CreateJob/CreateJobCommand";
import {Request, Response} from 'express';

export default class JoBController {

    constructor (private mediator: Mediator){

    }

    async CreateJob(req: Request, res : Response){
        console.log("Chegou");
        console.log("CONTROLLER MEDIATOR", this.mediator);
        var command = new CreateJobCommand(
            req.body.cnpj,
            req.body.razaoSocial,
            req.body.emailRecrutador,
            req.body.nomeRecrutador,
            req.body.celularRecrutador,
            // req.body.tipoVaga,
            0,
            req.body.cargo,
            req.body.numeroVagas,
            req.body.tipoEstabelecimento,
            req.body.descricaoEmpresa,
            req.body.formaTrabalho,

            req.body.cidade,
            req.body.bairro,
            req.body.descricaoCargo,
            //req.body.FormacaoExperiencia,
            1,
            req.body.caracteristicasComportamentais,
            req.body.formaRemuneracao,
            req.body.beneficios,            
            req.body.jornadaTrabalhoCargo,
            req.body.formaRecebimentoCurriculo,
            req.body.emailRecebimentoCurriculo
        );
console.log("Antes do publishhhhh");
console.log(req.body);
console.log(command);
        var result = await this.mediator.send(command);

        return res.status(201).json(result);
    }

}