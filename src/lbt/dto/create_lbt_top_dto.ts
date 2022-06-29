import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class Create_Lbt_Top_Dto {
@IsOptional() 
@IsString()
@ApiProperty({ description: 'topCodigo', type: String })
topCodigo?: string;

@IsOptional() 
@IsString()
@ApiProperty({ description: 'topCodtin', type: String })
topCodtin?: string;

@IsOptional()
@IsString()
@ApiProperty({ description: 'topDescripcion', type: String })
topDescripcion?: string;

}