import { PartialType, OmitType } from '@nestjs/swagger';
import { Create_Lbt_Inp_Dto } from './create_lbt_inp_dto';


export class Edit_Lbt_Inp_Dto extends PartialType(
    OmitType(Create_Lbt_Inp_Dto, [

    ] as const),
) { }

