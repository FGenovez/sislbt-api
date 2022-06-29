import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class Create_Lbt_Tdv_Dto {
@IsOptional() 
@IsString()
@ApiProperty({ description: 'tdvCodigo', type: String })
tdvCodigo?: string;
@ApiProperty({ description: 'tdvDescripcion', type: String })
tdvDescripcion?: string;

}