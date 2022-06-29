import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lbt_Tin_Entity } from './entities/lbt_tin_entity';
import { Lbt_Top_Entity } from './entities/lbt_top_entity';
import { LbtController } from './lbt.controller';
import { LbtService } from './lbt.service';
import { Lbt_Tpa_Entity } from './entities/lbt_tpa_entity';
import { Lbt_Inp_Entity } from './entities/lbt_inp_entity';
import { Lbt_Tdv_Entity } from './entities/lbt_tdv_entity';
import { Lbt_Eip_Entity } from './entities/lbt_eip_entity';
import { Lbt_Etr_Entity } from './entities/lbt_etr_entity';
import { Lbt_Ipt_Entity } from './entities/lbt_ipt_entity';
import { AuthModule } from 'src/auth/auth.module';
import { Sis_Usr_Entity } from './entities/sis_usr_entity';
import { Sis_Rol_Entity } from './entities/sis_rol_entity';


@Module({
  imports: [AuthModule, 
    TypeOrmModule.forFeature([
          Lbt_Tin_Entity, 
          Lbt_Top_Entity, 
          Lbt_Tpa_Entity, 
          Lbt_Inp_Entity,
          Lbt_Tdv_Entity,
          Lbt_Eip_Entity,
          Lbt_Etr_Entity,
          Lbt_Ipt_Entity,
          Sis_Rol_Entity, 
          Sis_Usr_Entity
          ])],
  controllers: [LbtController],
  providers: [LbtService]
})
export class LbtModule {}
