import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";


@Index("LBT_TPA_PK", ["tpaCodigo"], { unique: true })
@Entity("LBT_TPA_TIPOS_PAGO")
export class Lbt_Tpa_Entity {
  @PrimaryColumn('varchar2',{ name: 'TPA_CODIGO', length: 6 })
  tpaCodigo: string;
  @Column('varchar2',{ name: 'TPA_DESCRIPCION', length: 100 })
  tpaDescrpcion: string;
}