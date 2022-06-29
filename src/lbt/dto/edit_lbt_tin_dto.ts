import { PartialType, OmitType } from '@nestjs/swagger';
import { Create_Lbt_Tin_Dto } from './create_lbt_tin_dto';


export class Edit_Lbt_Tin_Dto extends PartialType(
    OmitType(Create_Lbt_Tin_Dto, [

    ] as const),
) { }