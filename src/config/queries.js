export const CREATE_TABLE_VITIMA = `
    create table if not exists vitima (
      id integer primary key,
      nome text not null,
      idade integer not null,
      genero integer not null
    )
`;

export const CREATE_TABLE_OCORRENCIA = `
  create table if not exists ocorrencia (
    id integer primary key,
    descricao text not null,
    endereco text not null,
    id_vitima text not null,
    obito boolean not null,
    foreign key (id_vitima)
      references vitima(id)
  )
`;
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/
export const INSERT_VITIMA = `
      insert into vitima values (
        ?, ?, ?, ?
      )
`;

export const INSERT_OCORRENCIA = `
      insert into ocorrencia values (
        ?, ?, ?, ?, ?
      )
`;

/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

export const SELECT_VITIMA = `
        select * from vitima where idade BETWEEN 18 AND 40;
`;

export const SELECT_OCORRENCIA = `
        select * from ocorrencia, vitima where ocorrencia.descricao = "Feminicídio" and vitima.id = ocorrencia.id_vitima;
`;

export const SELECT_OCORRENCIA_LOCAL = `
        select *, substr(endereco, 1, 10) from ocorrencia, vitima where endereco like("%del%") and vitima.id = ocorrencia.id_vitima;
`;
//ocorrencia, vitima where ocorrencia.endereco and vitima.id = ? == ocorrencia.endereco and vitima.id = ?
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/
