import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Lbt_Inp_Entity } from "./lbt_inp_entity";


@Index("LBT_ETR_PK", ["etrCodigo"], { unique: true })
@Entity("LBT_ETR_ESTADOS_TRACKING")
export class Lbt_Etr_Entity {
  @PrimaryColumn('varchar2',{ name: 'ETR_CODIGO', length: 2 })
  etrCodigo: string;
  @Column('varchar2',{ name: 'ETR_DESCRIPCION', length: 100 })
  etrDescrpcion: string;

  //RELACIÓN ENCABEZADO- DETALLE[ETR] - DETALLE[INP]
  @OneToMany(() => Lbt_Inp_Entity, (lbt_Inp_Entity) => (lbt_Inp_Entity.encabezado_etr))
  instrucciones: Lbt_Inp_Entity[];

}