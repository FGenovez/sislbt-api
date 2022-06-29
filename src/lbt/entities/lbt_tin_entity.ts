import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Lbt_Top_Entity } from "./lbt_top_entity";


@Index("LBT_TIN_PK", ["tinCodigo"], { unique: true })
@Entity("LBT_TIN_TIPOS_INSTRUCCION")
export class Lbt_Tin_Entity {
  @PrimaryColumn('varchar2',{ name: 'TIN_CODIGO', length: 3 })
  tinCodigo: string;
  @Column('varchar2',{ name: 'TIN_DESCRIPCION', length: 120 })
  tinDescrpcion: string;


//RELACIÓN ENCABEZADO[IPT] - DETALLE[ETR]
@ManyToOne(() => Lbt_Top_Entity, (Lbt_top_Entity) => (Lbt_top_Entity.encabezado_tin))
@JoinColumn ([{ name: "TIN_CODIGO", referencedColumnName: "topCodtin" }])
detalle_top: Lbt_Top_Entity[];   


} 