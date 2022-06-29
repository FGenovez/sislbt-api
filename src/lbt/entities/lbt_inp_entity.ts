import { Type } from "class-transformer";
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, OneToMany } from 'typeorm';
import { Lbt_Etr_Entity } from "./lbt_etr_entity";
import { Lbt_Ipt_Entity } from './lbt_ipt_entity';

@Index("LBT_INP_PK", ["inpCodigo"], { unique: true })
@Entity("LBT_INP_INSTRUCCIONES_PAGO", { schema: 'SISLBT' })

export class Lbt_Inp_Entity {
  @PrimaryColumn("number",{primary: true, name: "INP_CODIGO", precision: 6, scale: 0})
  inpCodigo?: number;
  @Column("varchar2",{ name: 'INP_CODTIN', length: 2 })
  inpCodtin?: string;
  @Column('varchar2',{ name: 'INP_CODTOP', length: 4 })
  inpCodtop?: string;
  @Column('varchar2',{ name: 'INP_CODTPA', length: 6 })
  inpCodtpa?: string;
  @Column('varchar2',{ name: 'INP_CTAORI', length: 30 })
  inpCtaori?: string;
  @Column('varchar2',{ name: 'INP_CTADES', length: 30 })
  inpCtades?: string;
  @Column('number',{ name: 'INP_MONTO', precision: 20, scale: 2})
  inpMonto?: number;
  @Column('varchar2',{ name: 'INP_CONCEPTO', length: 500 })
  inpConcepto?: string;    
  @Column('varchar2',{ name: 'INP_REFERENCIA', length: 20 })
  inpReferencia?: string;
  @Column('number',{ name: 'INP_REFETRAZA', precision: 10, scale: 0 })
  inpRefetraza?: number;
  @Column('timestamp',{ name: 'INP_FECHA_OPE', nullable: true})
  @Type(() => Date)
  inpFechaOpe?: Date | null;
  @Column('varchar2',{ name: 'INP_PROGRA', length: 1 })
  inpProgra?: string;    
  @Column('timestamp',{ name: 'INP_FECHA_PROG', nullable: true})
  @Type(() => Date)
  inpFechaProg?: Date | null;
  @Column('varchar2',{ name: 'INP_USER_REG', length: 30 })
  inpUserReg?: string;    
  @Column('timestamp',{ name: 'INP_FECHA_REG', nullable: true})
  @Type(() => Date)
  inpFechaReg?: Date | null;
  @Column('varchar2',{ name: 'INP_USER_REV', length: 30 })
  inpUserRev?: string;    
  @Column('timestamp',{ name: 'INP_FECHA_REV'})
  @Type(() => Date)
  inpFechaRev?: Date | null;
  @Column('varchar2',{ name: 'INP_AUTOMATICA', length: 1 })
  inpAutomatica?: string;    
  @Column('varchar2',{ name: 'INP_USER_AUT', length: 30 })
  inpUserAut?: string;    
  @Column('timestamp',{ name: 'INP_FECHA_AUT', nullable: true})
  @Type(() => Date)
  inpFechaAut?: Date | null;
  @Column('number',{ name: 'INP_NUMRES_SOV', precision: 10, scale: 0})
  inpNumresSov?: number;
  @Column('varchar2',{ name: 'INP_CODTDV', length: 4})
  inpCodtdv?: string;
  @Column('number',{ name: 'INP_CODINP_ORI', precision: 10, scale: 0})
  inpCodinpOri?: number;
  @Column('varchar2',{ name: 'INP_CTADEBITO', length: 30 })
  inpCtadebito?: string;    
  @Column('varchar2',{ name: 'INP_CTACREDITO', length: 30 })
  inpCtacredito?: string;
  @Column('varchar2',{ name: 'INP_CODEIP', length: 2 })
  inpCodeip?: string;
  @Column('varchar2',{ name: 'INP_EDOFLUJO', length: 1 })
  inpEdoflujo?: string;
  @Column('varchar2',{ name: 'INP_OBSERVACIONES', length: 150 })
  inpObservaciones?: string;
  @Column('varchar2',{ name: 'INP_ERRORES', length: 150 })
  inpErrores?: string;
  @Column('varchar2',{ name: 'INP_CODETR', length: 2 })
  inpCodetr?: string;
  @Column('number',{ name: 'INP_CODBCR', precision: 10, scale: 0})
  inpCodbcr?: number;
  @Column('timestamp',{ name: 'INP_FECHA_EDOBCR', nullable: true})
  @Type(() => Date)
  inpFechaEdobcr?: Date | null;
  @Column('number',{ name: 'INP_TIPOTRANS', precision: 1, scale: 0})
  inpTipotrans?: number;    
  @Column('varchar2',{ name: 'INP_CODAPI', length: 16 })    
  inpCodapi?: string;

  iptCodinp?: number;
  iptTipord?: string;
  iptNomord?: string;
  iptApeord?: string;
  iptCtaord?: string;
  iptTipbene?: string;
  iptNombene?: string;
  iptApebene?: string;
  iptCtabene?: string;
  iptDetpago?: string;   
  

//RELACIÓN ENCABEZADO[IPT] - DETALLE[ETR]
@OneToMany(() => Lbt_Etr_Entity, (lbt_Etr_Entity) => (lbt_Etr_Entity.instrucciones))
encabezado_etr: Lbt_Etr_Entity[];   

}
