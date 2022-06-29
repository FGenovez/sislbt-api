import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Lbt_Tin_Entity } from "./lbt_tin_entity";


@Index("LBT_TOP_PK", ["topCodigo"], { unique: true })
@Entity("LBT_TOP_TIPOS_OPERACION")
export class Lbt_Top_Entity {
  @PrimaryColumn('varchar2',{ name: 'TOP_CODIGO', length: 4 })
  topCodigo: string;
  @Column('varchar2',{ name: 'TOP_CODTIN', length: 4 })
  topCodtin: string;  
  @Column('varchar2',{ name: 'TOP_DESCRIPCION', length: 120 })
  topDescrpcion: string;


  //ManyToOne - DETALLE[INP] - DETALLE[IPT]
  @ManyToOne(() => Lbt_Tin_Entity, (Lbt_tin_Entity) => Lbt_tin_Entity.detalle_top)
  @JoinColumn ([{ name: "TOP_CODTIN", referencedColumnName: "tinCodigo" }])
  encabezado_tin: Lbt_Tin_Entity[];   

}