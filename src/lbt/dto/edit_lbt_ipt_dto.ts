import { PartialType, OmitType } from '@nestjs/swagger';
import { Create_Lbt_Ipt_Dto } from './create_lbt_ipt_dto';


export class Edit_Lbt_Ipt_Dto extends PartialType(
    OmitType(Create_Lbt_Ipt_Dto, [

    ] as const),
) { }