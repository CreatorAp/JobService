import CreateJobCommand from './CreateJobCommand';
import { IJobRepository } from '../../../../Domain/Repository/IJobRepository';
import RabbitMqEventBus from '../../../../Infra/EventBus/RabbitMqEventBus';
import Job from '../../../../Domain/Entity/Job';
import JobCreatedEvent from '../../../../../../Contracts/Events/JobCreatedEvent';
import JobRepository from '../../../../Infra/Repository/JobRepository';

export default class CreateJobHandler{

    constructor (private repository : JobRepository, private eventBus : RabbitMqEventBus){

    }

    handle (command: CreateJobCommand ){
        console.log("Antes do publish");
        var job = new Job(
            command.Cnpj,
            command.RazaoSocial,
            command.EmailRecrutador,
            command.NomeRecrutador,
            command.CelularRecrutador,
            command.TipoVaga,
            command.Cargo,
            command.NumeroVagas,
            command.TipoEstabelecimento,
            command.DescricaoEmpresa,
            command.FormaTrabalho,

            command.Cidade,
            command.Bairro,
            command.DescricaoCargo,
            1,
            command.CaracteristicasComportamentais,
            command.FormaRemuneracao,
            "",            
            command.JornadaTrabalhoCargo,
            command.FormaRecebimentoCurriculo,
            command.EmailRecebimentoCurriculo
        );

        this.repository.create(job);
        console.log("PAssou repositorio");
        var jobCreated = new JobCreatedEvent(
                        command.Cnpj,
            command.RazaoSocial,
            command.EmailRecrutador,
            command.NomeRecrutador,
            command.CelularRecrutador,
            command.TipoVaga,
            command.Cargo,
            command.NumeroVagas,
            command.TipoEstabelecimento,
            command.DescricaoEmpresa,
            command.FormaTrabalho,

            command.Cidade,
            command.Bairro,
            command.DescricaoCargo,
            1,
            command.CaracteristicasComportamentais,
            command.FormaRemuneracao,
            command.Beneficios,            
            command.JornadaTrabalhoCargo,
            command.FormaRecebimentoCurriculo,
            command.EmailRecebimentoCurriculo
        );
console.log("Antes do publish");
        this.eventBus.publish("job.created", jobCreated);
        console.log("depois do publish");
    }

}

