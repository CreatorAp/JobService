import Job from '../../Domain/Entity/Job';
export default class JobRepository {
    create(job: Job): Promise<Job>;
    getById(cnpj: string): Promise<any>;
    update(cnpj: string, job: Job): Promise<any>;
}
//# sourceMappingURL=JobRepository.d.ts.map