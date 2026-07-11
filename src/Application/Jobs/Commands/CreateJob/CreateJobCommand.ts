
export default class CreateJobCommand{
    constructor(
    Cnpj: string, RazaoSocial: string, EmailRecrutador: string, 
    NomeRecrutador: string, CelularRecrutador: string, 
    //Informações vaga
    TipoVaga: number, // 
    Cargo: string, NumeroVagas: number, TipoEstabelecimento: string, DescricaoEmpresa: string,
    FormaTrabalho: number, Cidade: string, Bairro: string, DescricaoCargo: string,
    FormacaoExperiencia: number, CaracteristicasComportamentais: string,    
    FormaRemuneracao: number,
    Beneficios: string,
    JornadaTrabalhoCargo: number,
    FormaRecebimentoCurriculo: number,
    EmailRecebimentoCurriculo: string){
    this.Cnpj = Cnpj ;
    this.RazaoSocial= RazaoSocial;
    this.EmailRecrutador= EmailRecrutador;
    this.NomeRecrutador= NomeRecrutador;
    this.CelularRecrutador= CelularRecrutador;
    //Informações vaga
    this.TipoVaga = TipoVaga; // 
    this.Cargo= Cargo;
    this.NumeroVagas= NumeroVagas;
    this.TipoEstabelecimento= TipoEstabelecimento;
    this.DescricaoEmpresa= DescricaoEmpresa;
    this.FormaTrabalho= FormaTrabalho;
    this.Cidade= Cidade;
    this.Bairro= Bairro;
    this.DescricaoCargo= DescricaoCargo;
    this.FormacaoExperiencia=FormacaoExperiencia;
    this.CaracteristicasComportamentais= CaracteristicasComportamentais;    
    this.FormaRemuneracao= FormaRemuneracao;
    this.Beneficios= Beneficios;
    this.JornadaTrabalhoCargo= JornadaTrabalhoCargo;
    this.FormaRecebimentoCurriculo= FormaRecebimentoCurriculo;
    this.EmailRecebimentoCurriculo= EmailRecebimentoCurriculo;
    }

    Cnpj: string;
    RazaoSocial: string;
    EmailRecrutador: string;
    NomeRecrutador: string;
    CelularRecrutador: string;
    //Informações vaga
    TipoVaga: number; // 
    Cargo: string;
    NumeroVagas: number;
    TipoEstabelecimento: string;
    DescricaoEmpresa: string;
    FormaTrabalho: number;
    Cidade: string;
    Bairro: string;
    DescricaoCargo: string;
    FormacaoExperiencia: number;
    CaracteristicasComportamentais: string;    
    FormaRemuneracao: number;
    Beneficios: string;
    JornadaTrabalhoCargo: number;
    FormaRecebimentoCurriculo: number;
    EmailRecebimentoCurriculo: string;
}