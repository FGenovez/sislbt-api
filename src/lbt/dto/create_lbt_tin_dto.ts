import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class Create_Lbt_Tin_Dto {
@IsOptional() 
@IsString()
@ApiProperty({ description: 'tinCodigo', type: String })
tinCodigo?: string;
@IsOptional()
@IsString()
@ApiProperty({ description: 'tinDescripcion', type: String })
tinDescripcion?: string;

}