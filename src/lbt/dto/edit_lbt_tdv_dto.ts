import { PartialType, OmitType } from '@nestjs/swagger';
import { Create_Lbt_Tdv_Dto } from './create_lbt_tdv_dto';

export class Edit_Lbt_Tdv_Dto extends PartialType(
    OmitType(Create_Lbt_Tdv_Dto, [

    ] as const),
) { }