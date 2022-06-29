import { PartialType, OmitType } from '@nestjs/swagger';
import { Create_Lbt_Tpa_Dto } from './create_lbt_tpa_dto';

export class Edit_Lbt_Tpa_Dto extends PartialType(
    OmitType(Create_Lbt_Tpa_Dto, [

    ] as const),
) { }