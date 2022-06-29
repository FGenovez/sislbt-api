import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { Lbt_Inp_Entity } from './lbt_inp_entity';


@Index("LBT_IPT_PK", ["iptCodinp"], { unique: true })
@Entity("LBT_IPT_INSTRUCCIONES_PAGOTER")
export class Lbt_Ipt_Entity {
  @PrimaryColumn('number',{ name: 'IPT_CODINP', precision: 6, scale: 0 })
  iptCodinp?: number;
  @Column('varchar2',{ name: 'IPT_TIPORD', length: 30 })
  iptTipord?: string;
  @Column('varchar2',{ name: 'IPT_NOMORD', length: 60 })
  iptNomord?: string;
  @Column('varchar2',{ name: 'IPT_APEORD', length: 60 })
  iptApeord?: string;
  @Column('varchar2',{ name: 'IPT_CTAORD', length: 30 })
  iptCtaord?: string;
  @Column('varchar2',{ name: 'IPT_TIPBENE', length: 30 })
  iptTipbene?: string;
  @Column('varchar2',{ name: 'IPT_NOMBENE', length: 60 })
  iptNombene?: string;
  @Column('varchar2',{ name: 'IPT_APEBENE', length: 60 })
  iptApebene?: string;
  @Column('varchar2',{ name: 'IPT_CTABENE', length: 30 })
  iptCtabene?: string;
  @Column('varchar2',{ name: 'IPT_DETPAGO', length: 200 })
  iptDetpago?: string;

  // @OneToOne(() => Lbt_Inp_Entity)
  // @JoinColumn()
  // profile: Lbt_Inp_Entity;


// //RELACIÓN ENCABEZADO[INP] - DETALLE[NAE]
// @OneToOne(() => Lbt_Inp_Entity, (lbt_Inp_Entity) => (lbt_Inp_Entity.inspagoter))
// @JoinColumn ([{ name: "IPT_CODINP", referencedColumnName: "inpCodigo" }])
// insPago: Lbt_Inp_Entity[]; 

}