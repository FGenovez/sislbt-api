import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class Create_Lbt_Inp_Dto {
@IsOptional() 
@IsNumber()
@ApiProperty({ description: '', type: Number })
inpCodigo?: number;
@IsOptional()
@IsString()
@ApiProperty({ description: 'Código del tipo de instrucción de pago', type: String })
inpCodtin?: string;
@IsOptional()
@IsString()
@ApiProperty({ description: 'Código de tipo de operación', type: String, })
inpCodtop?: string;
@IsOptional()
@IsString()
@ApiProperty({ description: 'Código de tipo de pago', type: String, })
inpCodtpa?: string;
@IsOptional()
@IsString()
@ApiProperty({ description: 'Cuenta origen', type: String, })
inpCtaori?: string;
@IsOptional()
@IsString()
@ApiProperty({ description: 'Cuenta destino', type: String, })
inpCtades?: string;
@IsOptional()
@IsNumber()
@ApiProperty({ description: 'Monto de instrucción', type: Number, })
inpMonto?: number;
@IsOptional()
@IsString()
@ApiProperty({ description: 'Concepto de la instrucción de pago', type: String, })
inpConcepto?: string; 
@IsOptional()
@IsString()
@ApiProperty({ description: 'Referencia', type: String, })
inpReferencia?: string;
@IsOptional()
@IsNumber()
@ApiProperty({ description: 'Referencia Trazabilidad', type: Number, })
inpRefetraza?: number;

@IsOptional()
@IsString()
@ApiProperty({ description: 'Fecha de operación', type: String, })
inpFechaOpe?: string;

@IsOptional()
@IsString()
@ApiProperty({ description: 'Programada Sí o No', type: String, })
inpProgra?: string; 

@IsOptional()
@IsDate()
@ApiProperty({ description: 'Fecha de programación', type: Date, })
inpFechaProg?: Date;

@IsOptional()
@IsString()
@ApiProperty({ description: 'Usuario que registró la instrucción', type: String, })
inpUserReg?: string; 
@IsOptional()
@IsString()
@ApiProperty({ description: 'Fecha y hora en que se realizó el registro ', type: String, })
inpFechaReg?: string;
@IsOptional()
@IsString()
@ApiProperty({ description: 'Usuario que revisó la instrucción', type: String, })
inpUserRev?: string; 
@IsOptional()
@IsString()
@ApiProperty({ description: 'Fecha y hora en que se realizó ', type: String, })
inpFechaRev?: string;
@IsOptional()
@IsString()
@ApiProperty({ description: 'Indica si la instrucción de pago', type: String, })
inpAutomatica?: string; 
@IsOptional()
@IsString()
@ApiProperty({ description: 'Usuario que autorizó la instrucción. ', type: String, })
inpUserAut?: string;  
@IsOptional()
@IsString()
@ApiProperty({ description: 'Fecha y hora en que se autorizó la instrucción', type: String, })
inpFechaAut?: string;
@IsOptional()
@IsNumber()
@ApiProperty({ description: 'Número de reserva del sov', type: Number, })
inpNumresSov?: number;
@IsOptional()
@IsString()
@ApiProperty({ description: 'Código del tipo de la devolución', type: String, })
inpCodtdv?: string;
@IsOptional()
@IsNumber()
@ApiProperty({ description: 'Id de la instrucción origen del lbtr', type: Number, })
inpCodinpOri?: number;
@IsOptional()
@IsString()
@ApiProperty({ description: 'Número de cuenta de depósitos a debitar.', type: String, })
inpCtadebito?: string; 
@IsOptional()
@IsString()
@ApiProperty({ description: 'Número de cuenta de depósitos a efectuar el crédito', type: String, })
inpCtacredito?: string;
@IsOptional()
@IsString()
@ApiProperty({ description: 'Estado de las de instrucciones según BCR', type: String, })
inpCodeip?: string;
@IsOptional()
@IsString()
@ApiProperty({ description: 'Estado del flujo', type: String, })
inpEdoflujo?: string;
@IsOptional()
@IsString()
@ApiProperty({ description: 'Observaciones de respuesta', type: String, })
inpObservaciones?: string;
@IsOptional()
@IsString()
@ApiProperty({ description: 'Errores de respuesta', type: String, })
inpErrores?: string;
@IsOptional()
@IsString()
@ApiProperty({ description: 'Código del estado de tracking', type: String, })
inpCodetr?: string;
@IsOptional()
@IsNumber()
@ApiProperty({ description: 'Código de instrucción asignado por BCR', type: Number, })
inpCodbcr?: number;
@IsOptional()
@IsDate()
@ApiProperty({ description: 'Fecha en que se actualiza el estado del BCR', type: Date, })
inpFechaEdobcr?: Date;
@IsOptional()
@IsNumber()
@ApiProperty({ description: 'Tipo de transferencia', type: Number, })
inpTipotrans?: number;  
@IsOptional()
@IsString()
@ApiProperty({ description: 'CODIGO DE CONTROL', type: String, })
inpCodapi?: string;

@IsOptional()
@IsString()
id: number;

@IsOptional()
@IsString()
iptCodinp: number;
@IsOptional()
@IsString()
iptTipord: string;
@IsOptional()
@IsString()
iptNomord: string;
@IsOptional()
@IsString()
iptApeord: string;
@IsOptional()
@IsString()
iptCtaord: string;
@IsOptional()
@IsString()
iptTipbene: string;
@IsOptional()
@IsString()
iptNombene: string;
@IsOptional()
@IsString()
iptApebene: string;
@IsOptional()
@IsString()
iptCtabene: string;
@IsOptional()
@IsString()
iptDetpago: string;   

}