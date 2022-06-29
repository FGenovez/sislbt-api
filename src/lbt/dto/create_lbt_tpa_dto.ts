import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class Create_Lbt_Tpa_Dto {
@IsOptional() 
@IsString()
@ApiProperty({ description: 'tpaCodigo', type: String })
tpaCodigo?: string;
@ApiProperty({ description: 'tpaDescripcion', type: String })
tpaDescripcion?: string;

}