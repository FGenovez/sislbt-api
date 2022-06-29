import { PartialType, OmitType } from '@nestjs/swagger';
import { Create_Lbt_Top_Dto } from './create_lbt_top_dto';

export class Edit_Lbt_Top_Dto extends PartialType(
    OmitType(Create_Lbt_Top_Dto, [

    ] as const),
) { }