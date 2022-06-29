import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Lbt_Tin_Entity } from './lbt/entities/lbt_tin_entity';
import { LbtModule } from './lbt/lbt.module';
import { AuthModule } from './auth/auth.module';
import { Lbt_Top_Entity } from './lbt/entities/lbt_top_entity';
import { Lbt_Tpa_Entity } from './lbt/entities/lbt_tpa_entity';
import { Lbt_Inp_Entity } from './lbt/entities/lbt_inp_entity';
import { Lbt_Tdv_Entity } from './lbt/entities/lbt_tdv_entity';
import { Lbt_Eip_Entity } from './lbt/entities/lbt_eip_entity';
import { Lbt_Etr_Entity } from './lbt/entities/lbt_etr_entity';
import { Lbt_Ipt_Entity } from './lbt/entities/lbt_ipt_entity';
import { Sis_Rol_Entity } from './lbt/entities/sis_rol_entity';
import { Sis_Usr_Entity } from './lbt/entities/sis_usr_entity';

@Module({
  imports: [AuthModule,
  TypeOrmModule.forRoot({
    type: 'oracle',
    connectString: '192.168.1.9:1521/OBELIX',
    port: 1521,
    username: 'WSISLBT',
    password: '4pl1c4c10n3sw3b',
    database: 'desa',
    schema: '',
    entities: [Lbt_Tin_Entity,
               Lbt_Top_Entity,
               Lbt_Tpa_Entity,
               Lbt_Inp_Entity,
               Lbt_Tdv_Entity,
               Lbt_Eip_Entity,
               Lbt_Etr_Entity,
               Lbt_Ipt_Entity, 
               Sis_Rol_Entity, 
               Sis_Usr_Entity],
    logging: true,
  }),
  LbtModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
