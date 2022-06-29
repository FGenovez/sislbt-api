import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";


@Index("LBT_TDV_PK", ["tdvCodigo"], { unique: true })
@Entity("LBT_TDV_TIPOS_DEVOLUCION")

export class Lbt_Tdv_Entity {
  @PrimaryColumn('varchar2',{ name: 'TDV_CODIGO', length: 4 })
  tdvCodigo: string;
  @Column('varchar2',{ name: 'TDV_DESCRIPCION', length: 100 })
  tdvDescrpcion: string;
}