import CreateJobCommand from './CreateJobCommand';
import RabbitMqEventBus from '../../../../Infra/EventBus/RabbitMqEventBus';
import JobRepository from '../../../../Infra/Repository/JobRepository';
export default class CreateJobHandler {
    private repository;
    private eventBus;
    constructor(repository: JobRepository, eventBus: RabbitMqEventBus);
    handle(command: CreateJobCommand): void;
}
//# sourceMappingURL=CreateJobHandler.d.ts.map