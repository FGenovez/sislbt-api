import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";


@Index("LBT_EIP_PK", ["eipCodigo"], { unique: true })
@Entity("LBT_EIP_ESTADOS_INSTPAGO")
export class Lbt_Eip_Entity {
  @PrimaryColumn('varchar2',{ name: 'EIP_CODIGO', length: 2 })
  eipCodigo: string;
  @Column('varchar2',{ name: 'EIP_DESCRIPCION', length: 100 })
  eipDescrpcion: string;
}