import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class Create_Lbt_Ipt_Dto {
@IsOptional() 
@IsNumber()
@ApiProperty({ description: '', type: Number })
iptCodinp?: number;

@IsOptional()
@IsString()
@ApiProperty({ description: '', type: String })
iptTipord?: string;

@IsOptional()
@IsString()
@ApiProperty({ description: '', type: String })
iptNomord?: string;
@IsOptional()
@IsString()
@ApiProperty({ description: '', type: String })
iptApeord?: string;
@IsOptional()
@IsString()
@ApiProperty({ description: '', type: String })
iptCtaord?: string;
@IsOptional()
@IsString()
@ApiProperty({ description: '', type: String })
iptTipbene?: string;
@IsOptional()
@IsString()
@ApiProperty({ description: '', type: String })
iptNombene?: string;
@IsOptional()
@IsString()
@ApiProperty({ description: '', type: String })
iptApebene?: string;
@IsOptional()
@IsString()
@ApiProperty({ description: '', type: String })
iptCtabene?: string;
@IsOptional()
@IsString()
@ApiProperty({ description: '', type: String })
iptDetpago?: string;
}