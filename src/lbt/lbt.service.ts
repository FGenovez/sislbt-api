import { ConsoleLogger, HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager, Repository } from 'typeorm';
import { Lbt_Tin_Entity } from './entities/lbt_tin_entity';
import { Lbt_Top_Entity } from './entities/lbt_top_entity';
import { Lbt_Tpa_Entity } from './entities/lbt_tpa_entity';
import { Lbt_Inp_Entity } from './entities/lbt_inp_entity';
import { Edit_Lbt_Inp_Dto } from './dto/edit_lbt_inp_dto';
import { Lbt_Tdv_Entity } from './entities/lbt_tdv_entity';
import { Lbt_Eip_Entity } from './entities/lbt_eip_entity';
import { Lbt_Etr_Entity } from './entities/lbt_etr_entity';
import { Create_Lbt_Inp_Dto } from './dto/create_lbt_inp_dto';
import { Lbt_Ipt_Entity } from './entities/lbt_ipt_entity';
import { Edit_Lbt_Ipt_Dto } from './dto/edit_lbt_ipt_dto';
import { Create_Lbt_Ipt_Dto } from './dto/create_lbt_ipt_dto';
import { Edit_Lbt_Tin_Dto } from './dto/edit_lbt_tin_dto';
import { Edit_Lbt_Top_Dto } from './dto/edit_lbt_top_dto';
import { Edit_Lbt_Tpa_Dto } from './dto/edit_lbt_tpa_dto';
import { Edit_Lbt_Tdv_Dto } from './dto/edit_lbt_tdv_dto';
import { Create_Lbt_Tin_Dto } from './dto/create_lbt_tin_dto';
import { Sis_Usr_Entity } from './entities/sis_usr_entity';
import { Sis_Rol_Entity } from './entities/sis_rol_entity';
import axios from 'axios';

@Injectable()
export class LbtService {

    constructor(
        @InjectRepository(Lbt_Tin_Entity) private tinRepository: Repository<Lbt_Tin_Entity>,
        @InjectRepository(Lbt_Top_Entity) private topRepository: Repository<Lbt_Top_Entity>,
        @InjectRepository(Lbt_Tpa_Entity) private tpaRepository: Repository<Lbt_Tpa_Entity>,
        @InjectRepository(Lbt_Inp_Entity) private inpRepository: Repository<Lbt_Inp_Entity>,
        @InjectRepository(Lbt_Tdv_Entity) private tdvRepository: Repository<Lbt_Tdv_Entity>,
        @InjectRepository(Lbt_Eip_Entity) private eipRepository: Repository<Lbt_Eip_Entity>,
        @InjectRepository(Lbt_Etr_Entity) private etrRepository: Repository<Lbt_Etr_Entity>,
        @InjectRepository(Lbt_Ipt_Entity) private iptRepository: Repository<Lbt_Ipt_Entity>,
        @InjectRepository(Sis_Usr_Entity) private usrRepository: Repository<Sis_Usr_Entity>,
        @InjectRepository(Sis_Rol_Entity) private rolRepository: Repository<Sis_Rol_Entity>
        ) { }

    /////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////Métodos GET////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////   
@ApiHeader({
name: 'Consulta de todos los registros del catálogo de tipos de instrucción',
description: 'Consulta de todos los registros del catálogo de tipos de instrucción',
})
async buscaTodosTin(): Promise<Lbt_Tin_Entity[]> {
const register = await this.tinRepository.find({
    order: {
        tinCodigo: 'ASC',
    },
});
return register;
} 

@ApiHeader({
    name: 'Consulta de todos los registros del catálogo de tipos de operación',
    description: 'Consulta de todos los registros del catálogo de tipos de operación',
    })
    async buscaTodosTop(): Promise<Lbt_Top_Entity[]> {
    const register = await this.topRepository.find({
        order: {
            topCodigo: 'ASC',
        },
    });
    return register;
    } 

    @ApiHeader({
        name: 'Consulta de todos los registros del catálogo de tipos de pago',
        description: 'Consulta de todos los registros del catálogo de tipos de pago',
        })
        async buscaTodosTpa(): Promise<Lbt_Tpa_Entity[]> {
        const register = await this.tpaRepository.find({
            order: {
                tpaCodigo: 'ASC',
            },
        });
        return register;
        } 

    @ApiHeader({
        name: 'Consulta de todos los registros del catálogo de tipos de devolución',
        description: 'Consulta de todos los registros del catálogo de tipos de devolución',
        })
        async buscaTodosTdv(): Promise<Lbt_Tdv_Entity[]> {
        const register = await this.tdvRepository.find({
            order: {
                tdvCodigo: 'ASC',
            },
        });
        return register;
        } 

    @ApiHeader({
        name: 'Servicio: busca todos los registros de <Lbt_Inp_Entity>',
        description: 'busca todos los registros de <Lbt_Inp_Entity>',
        })
        async buscaTodosInp(): Promise<Lbt_Inp_Entity[]> {
        const register = await this.inpRepository.find({
            order: {
                inpCodigo: 'DESC',
                inpCodtop: 'ASC'
            },
        });
        return register;
        }
        

     @ApiHeader({
        name: 'Consulta por la llave de instrucciones de pago {:inpCodigo}',
        description: 'Consulta por la llave de instrucciones de pago {:inpCodigo}',
        })
        async buscaPorInp(v_cod: number): Promise<Lbt_Inp_Entity> {
        const register = await this.inpRepository.findOne({
            inpCodigo: v_cod
        });
        return register;
    } 

    @ApiHeader({
        name: 'Consulta de instrucciones de pago por {:inpCodbcr}',
        description: 'Consulta de instrucciones de pago por {:inpCodbcr}',
        })
        async buscaPorInpCodbcr(v_cod: number): Promise<Lbt_Inp_Entity> {
        const register = await this.inpRepository.findOne({
            inpCodbcr: v_cod
        });
        return register;
    }  
    
    @ApiHeader({
        name: 'Consulta de instrucciones de pago por {:inpCodbcr}',
        description: 'Consulta de instrucciones de pago por {:inpCodbcr}',
        })
        async buscaPorInpConcepto(v_cod: string) /*: Promise<Lbt_Inp_Entity>*/ {
        const register = await this.inpRepository.find({
            where: "INP_CONCEPTO LIKE '%"+v_cod+"%'",
        });
        return register;
    }      
    /////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////Métodos PUT////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////
    @ApiHeader({
        name: 'Servicio: Actualiza en <Lbt_Inp_Entity>',
        description: 'Actualiza en <Lbt_Inp_Entity>',
        })
        async actualizaInsPago(dto, dto1:Edit_Lbt_Inp_Dto,dto2: Edit_Lbt_Ipt_Dto ): Promise<Lbt_Inp_Entity> {
            const v_cod = dto.id;
            dto1 = {inpConcepto: 'A'}
            dto1.inpCodigo = dto.id;
            dto1.inpCodtin = dto.instruccion.inpCodtin;
            dto1.inpCodtop = dto.instruccion.inpCodtop; 
            dto1.inpCodtpa = dto.instruccion.inpCodtpa; 
            dto1.inpCodtdv = dto.instruccion.inpCodtdv; 
            dto1.inpCodeip = dto.instruccion.inpCodeip; 
            dto1.inpCodetr = dto.instruccion.inpCodetr; 
            dto1.inpCodbcr = dto.instruccion.inpCodbcr; 
            dto1.inpCtaori = dto.instruccion.inpCtaori; 
            dto1.inpCtaori = dto.instruccion.inpCtaori; 
            dto1.inpMonto = dto.instruccion.inpMonto; 
            dto1.inpConcepto = dto.instruccion.inpConcepto; 
            dto1.inpReferencia = dto.instruccion.inpReferencia; 
            dto1.inpRefetraza = dto.instruccion.inpRefetraza; 
            dto1.inpFechaOpe = dto.instruccion.inpFechaOpe; 
            dto1.inpProgra = dto.instruccion.inpProgra; 
            dto1.inpFechaProg = dto.instruccion.inpFechaProg; 
            dto1.inpUserReg = dto.instruccion.inpUserReg; 
            dto1.inpFechaReg = dto.instruccion.inpFechaReg; 
            dto1.inpUserRev = dto.instruccion.inpUserRev; 
            dto1.inpFechaRev = dto.instruccion.inpFechaRev; 
            dto1.inpAutomatica = dto.instruccion.inpAutomatica; 
            dto1.inpUserAut = dto.instruccion.inpUserAut; 
            dto1.inpFechaAut = dto.instruccion.inpFechaAut; 
            dto1.inpNumresSov = dto.instruccion.inpNumresSov; 
            dto1.inpCodtdv = dto.instruccion.inpCodtdv; 
            dto1.inpCodinpOri = dto.instruccion.inpCodinpOri; 
            dto1.inpCtadebito = dto.instruccion.inpCtadebito; 
            dto1.inpCtacredito = dto.instruccion.inpCtacredito; 
            dto1.inpCodeip = dto.instruccion.inpCodeip; 
            dto1.inpEdoflujo = dto.instruccion.inpEdoflujo; 
            dto1.inpCodetr = dto.instruccion.inpCodetr; 
            dto1.inpObservaciones = dto.instruccion.inpObservaciones; 
            dto1.inpErrores = dto.instruccion.inpErrores; 
            dto1.inpTipotrans = dto.instruccion.inpTipotrans; 
            dto2 = {iptApebene: 'A'} 
            dto2.iptCodinp = dto.id;
            dto2.iptTipord = dto.instruccion.iptTipord; 
            dto2.iptNomord = dto.instruccion.iptNomord; 
            dto2.iptApeord = dto.instruccion.iptApeord; 
            dto2.iptCtaord = dto.instruccion.iptCtaord; 
            dto2.iptTipbene = dto.instruccion.iptTipbene; 
            dto2.iptNombene = dto.instruccion.iptNombene; 
            dto2.iptApebene = dto.instruccion.iptApebene; 
            dto2.iptCtabene = dto.instruccion.iptCtabene; 
            dto2.iptDetpago = dto.instruccion.iptDetpago;               

            const inp = await this.buscaPorInp(v_cod);
            const ipt = await this.buscaPorIpt(v_cod);
            const tin = await this.buscaPorTin(dto1.inpCodtin);
            const top = await this.buscaPorTop(dto1.inpCodtop);
            const tpa = await this.buscaPorTpa(dto1.inpCodtpa);
            const tdv = await this.buscaPorTdv(dto1.inpCodtdv);
            const eip = await this.buscaPorEip(dto1.inpCodeip);
            const etr = await this.buscaPorEtr(dto1.inpCodetr);
            if(!dto1.inpCodtin ||!tin )
                throw new HttpException('NO SE PUEDE ACTUALIZAR - No existe el registro en la entidad <Lbt_Tin_Entity>', HttpStatus.FORBIDDEN);
            if(!dto1.inpCodtop ||!top )
                throw new HttpException('NO SE PUEDE ACTUALIZAR - No existe el registro en la entidad <Lbt_Top_Entity>', HttpStatus.FORBIDDEN);
            if(!dto1.inpCodtpa ||!tpa )
                throw new HttpException('NO SE PUEDE ACTUALIZAR - No existe el registro en la entidad <Lbt_Tpa_Entity>', HttpStatus.FORBIDDEN);

            if(!inp || !tin || !top || !tpa) 
                throw new HttpException('NO SE PUEDE ACTUALIZAR - No existe el registro - (Lbt_Inp_Entity)', HttpStatus.FORBIDDEN);
            
            console.log("dto1", dto1);

            const modelToEdit = Object.assign(dto1);
            const updateRegister = await this.inpRepository.save(modelToEdit);


           dto2 = {iptApebene: 'A'}     //Importante inicializar el DTO, sino dá error de Undefined
          if(dto1.inpTipotrans == 4 || dto1.inpTipotrans == 5){
            dto2.iptCodinp = dto.id;
            dto2.iptTipord = dto.instruccion.iptTipord; 
            dto2.iptNomord = dto.instruccion.iptNomord; 
            dto2.iptApeord = dto.instruccion.iptApeord; 
            dto2.iptCtaord = dto.instruccion.iptCtaord; 
            dto2.iptTipbene = dto.instruccion.iptTipbene; 
            dto2.iptNombene = dto.instruccion.iptNombene; 
            dto2.iptApebene = dto.instruccion.iptApebene; 
            dto2.iptCtabene = dto.instruccion.iptCtabene; 
            dto2.iptDetpago = dto.instruccion.iptDetpago;             
            
            const modelToEdit1 = Object.assign(dto2);
            const updateRegister1 = await this.iptRepository.save(modelToEdit1);
        } 

        return modelToEdit+dto2;
        }
        
    @ApiHeader({
        name: 'Actualiza en <Lbt_Ipt_Entity>',
        description: 'Actualiza en <Lbt_Ipt_Entity>',
        })
        async actualizaInsPagoTer(v_cod: number, dto: Edit_Lbt_Ipt_Dto): Promise<Lbt_Ipt_Entity> {
        const inp = await this.buscaPorInp(v_cod);
        if(!inp )
            throw new HttpException('NO SE PUEDE ACTUALIZAR - No existe el registro en la entidad <Lbt_Ipt_Entity>', HttpStatus.FORBIDDEN);
        const modelToEdit = Object.assign(inp, dto);
        return await this.iptRepository.save(modelToEdit);
        }
        
    @ApiHeader({
        name: 'Actualiza en <Lbt_Ipt_Entity>',
        description: 'Actualiza en <Lbt_Ipt_Entity>',
        })
        async updateTin(v_cod: string, dto: Edit_Lbt_Tin_Dto): Promise<Lbt_Tin_Entity> {
        const tin = await this.buscaPorTin(v_cod);
        if(!tin )
            throw new HttpException('NO SE PUEDE ACTUALIZAR - No existe el registro en la entidad <Lbt_Tin_Entity>', HttpStatus.FORBIDDEN);
        const modelToEdit = Object.assign(tin, dto);
        return await this.tinRepository.save(modelToEdit);
        }
        
    @ApiHeader({
        name: 'Actualiza en <Lbt_Ipt_Entity>',
        description: 'Actualiza en <Lbt_Ipt_Entity>',
        })
        async updateTop(v_cod: string,v_tin: string,  dto: Edit_Lbt_Top_Dto): Promise<Lbt_Top_Entity> {
            const tin = await this.buscaPorTin(v_tin);
            const top = await this.buscaPorTop(v_cod);            
        if(!tin && !top)
            throw new HttpException('NO SE PUEDE ACTUALIZAR - No existe el registro en la entidad <Lbt_Top_Entity>', HttpStatus.FORBIDDEN);
        const modelToEdit = Object.assign(top, dto);
        return await this.topRepository.save(modelToEdit);
        }


    @ApiHeader({
        name: 'Actualiza en <Lbt_Tpa_Entity>',
        description: 'Actualiza en <Lbt_Tpa_Entity>',
        })
        async updateTpa(v_cod: string, dto: Edit_Lbt_Tpa_Dto): Promise<Lbt_Tpa_Entity> {
            const tpa = await this.buscaPorTpa(v_cod);            
        if(!tpa)
            throw new HttpException('NO SE PUEDE ACTUALIZAR - No existe el registro en la entidad <Lbt_Tpa_Entity>', HttpStatus.FORBIDDEN);
        const modelToEdit = Object.assign(tpa, dto);
        return await this.tpaRepository.save(modelToEdit);
        }

    @ApiHeader({
        name: 'Actualiza en <Lbt_Tpa_Entity>',
        description: 'Actualiza en <Lbt_Tpa_Entity>',
        })
        async updateTdv(v_cod: string, dto: Edit_Lbt_Tdv_Dto): Promise<Lbt_Tdv_Entity> {
            const tdv = await this.buscaPorTdv(v_cod);            
        if(!tdv)
            throw new HttpException('NO SE PUEDE ACTUALIZAR - No existe el registro en la entidad <Lbt_Tdv_Entity>', HttpStatus.FORBIDDEN);
        const modelToEdit = Object.assign(tdv, dto);
        return await this.tdvRepository.save(modelToEdit);
        }    

    //Busca por la llave Lbt_Tin_Entity
    @ApiHeader({
        name: 'Servicio: busca_usuarios_por_llave(v_codcia: string, v_usuario: string): Promise<Pri_Usu_Usuarios_Entity>',
        description: 'Busca registro a partir de parametros enviados en el URL',
        })
        async buscaPorTin(v_cod :string): Promise<Lbt_Tin_Entity> {
        const register = await this.tinRepository.findOne({tinCodigo: v_cod});
        return register;
    } 

    // ELIMINA UN REGISTRO 
    @ApiHeader({
        name: 'Servicio: EliminaLbtTin(v_tin :number)',
        description: 'Elimina registro en <Lbt_Tin_Entity>',
        })
        async deleteTin(v_cod :string){
        const tin = await this.tinRepository.findOne({tinCodigo: v_cod});
        if (!tin) {
            const toDelete = this.tinRepository.create(tin);
            this.tinRepository.remove(toDelete);
        }
        else {
            throw new HttpException('NO SE PUEDE ELIMINAR - No existe el registro - (Lbt_Tin_Entity)', HttpStatus.FORBIDDEN);
        }
    }

    // ELIMINA UN REGISTRO 
    @ApiHeader({
        name: 'Elimina registro en <Lbt_Top_Entity>',
        description: 'Elimina registro en <Lbt_Top_Entity>',
        })
        async deleteTop(v_cod :string, v_tin:string){
            const tin = await this.buscaPorTin(v_tin);
            const top = await this.buscaPorTop(v_cod);            
        if(!tin && !top){
            const toDelete = this.topRepository.create(top);
            this.topRepository.remove(toDelete);
        }
        else {
            throw new HttpException('NO SE PUEDE ELIMINAR - No existe el registro - (Lbt_Tin_Entity)', HttpStatus.FORBIDDEN);
        }
    }

    // ELIMINA UN REGISTRO 
    @ApiHeader({
        name: 'Elimina registro en <Lbt_Tpa_Entity>',
        description: 'Elimina registro en <Lbt_Tpa_Entity>',
        })
        async deleteTpa(v_cod :string){
            const tpa = await this.buscaPorTpa(v_cod);            
        if(!tpa){
            const toDelete = this.tpaRepository.create(tpa);
            this.tpaRepository.remove(toDelete);
        }
        else {
            throw new HttpException('NO SE PUEDE ELIMINAR - No existe el registro - (Lbt_Tin_Entity)', HttpStatus.FORBIDDEN);
        }
    }    

    // ELIMINA UN REGISTRO 
    @ApiHeader({
        name: 'Elimina registro en <Lbt_Tdv_Entity>',
        description: 'Elimina registro en <Lbt_Tdv_Entity>',
        })
        async deleteTdv(v_cod :string){
            const tdv = await this.buscaPorTdv(v_cod);            
        if(!tdv){
            const toDelete = this.tdvRepository.create(tdv);
            this.tdvRepository.remove(toDelete);
        }
        else {
            throw new HttpException('NO SE PUEDE ELIMINAR - No existe el registro - (Lbt_Tin_Entity)', HttpStatus.FORBIDDEN);
        }
    } 

    // ELIMINA UN REGISTRO 
    @ApiHeader({
        name: 'Elimina registro en <Lbt_Inp_Entity>',
        description: 'Elimina registro en <Lbt_Inp_Entity>',
        })
        async deleteInp(v_cod :number){
            const inp = await this.buscaPorInp(v_cod);            
            const ipt = await this.buscaPorIpt(v_cod);            
        if(inp && inp.inpEdoflujo == 'P'){
            if(ipt){
                const toDelete = this.iptRepository.create(ipt);
                this.iptRepository.remove(toDelete);
            }    
            const toDelete = this.inpRepository.create(inp);
            this.inpRepository.remove(toDelete);
        }
        else {
            throw new HttpException('NO SE PUEDE ELIMINAR - No existe el registro - (Lbt_Inp_Entity)', HttpStatus.FORBIDDEN);
        }
        return {inp, ipt}
    }     


    //Busca por la llave Lbt_Top_Entity
    @ApiHeader({
        name: 'Servicio: busca_usuarios_por_llave(v_codcia: string, v_usuario: string): Promise<Pri_Usu_Usuarios_Entity>',
        description: 'Busca registro a partir de parametros enviados en el URL',
        })
        async buscaPorTop(v_cod :string): Promise<Lbt_Top_Entity> {
        const register = await this.topRepository.findOne({topCodigo: v_cod});
        return register;
    } 

    //Busca por la llave Lbt_Tpa_Entity
    @ApiHeader({
        name: 'Servicio: busca_usuarios_por_llave(v_codcia: string, v_usuario: string): Promise<Pri_Usu_Usuarios_Entity>',
        description: 'Busca registro a partir de parametros enviados en el URL',
        })
        async buscaPorTpa(v_cod :string): Promise<Lbt_Tpa_Entity> {
        const register = await this.tpaRepository.findOne({tpaCodigo: v_cod});
        return register;
    } 
    //Busca por la llave Lbt_Tdv_Entity
    @ApiHeader({
        name: 'Servicio: busca_usuarios_por_llave(v_codcia: string, v_usuario: string): Promise<Pri_Usu_Usuarios_Entity>',
        description: 'Busca registro a partir de parametros enviados en el URL',
        })
        async buscaPorTdv(v_cod :string): Promise<Lbt_Tdv_Entity> {
        const register = await this.tdvRepository.findOne({tdvCodigo: v_cod});
        return register;
    } 
    //Busca por la llave Lbt_Eip_Entity
    @ApiHeader({
        name: 'Servicio: busca_usuarios_por_llave(v_codcia: string, v_usuario: string): Promise<Pri_Usu_Usuarios_Entity>',
        description: 'Busca registro a partir de parametros enviados en el URL',
        })
        async buscaPorEip(v_cod :string): Promise<Lbt_Eip_Entity> {
        const register = await this.eipRepository.findOne({eipCodigo: v_cod});
        return register;
    }    
    //Busca por la llave Lbt_Eip_Entity
    @ApiHeader({
        name: 'Servicio: busca_usuarios_por_llave(v_codcia: string, v_usuario: string): Promise<Pri_Usu_Usuarios_Entity>',
        description: 'Busca registro a partir de parametros enviados en el URL',
        })
        async buscaPorEtr(v_cod :string): Promise<Lbt_Etr_Entity> {
        const register = await this.etrRepository.findOne({etrCodigo: v_cod});
        return register;
    }  
    //Busca por la llave Lbt_Tin_Entity
    @ApiHeader({
        name: 'Servicio: busca_usuarios_por_llave(v_codcia: string, v_usuario: string): Promise<Pri_Usu_Usuarios_Entity>',
        description: 'Busca registro a partir de parametros enviados en el URL',
        })
        async buscaPorIpt(v_cod :number): Promise<Lbt_Ipt_Entity> {
        const register = await this.iptRepository.findOne({iptCodinp: v_cod});
        return register;
    } 


    //CREA REGISTRO <Lbt_Inp_Entity>
    @ApiHeader({
        name: 'Permite CREAR los registros en <Lbt_Inp_Entity>',
        description: 'Permite CREAR los registros en <Lbt_Inp_Entity>',
      })
      async creaLbtInp(dto: Create_Lbt_Inp_Dto, dto1: Create_Lbt_Ipt_Dto)
      {
        const register = await this.inpRepository.findOne({
            inpCodigo: dto.inpCodigo
       });
        if (register)
            throw new HttpException('NO SE PUEDE CREAR - El registro ya existe - (creaLbt_Inp_Entity)', HttpStatus.FORBIDDEN);
        else {
             dto1 = {iptApebene: 'A'}   //Importante inicializar el DTO, sino dá error de Undefined
          
            if (!register) {        
              const nextVal = await getManager().query("select SISLBT.LBT_INP_SEC.NEXTVAL as ID from dual ")
              dto.inpCodigo= nextVal[0].ID;
              const model = this.inpRepository.create(dto);
              const newRegister = await this.inpRepository.save(model);

              const insertado = await this.inpRepository.findOne({
                inpCodigo: dto.inpCodigo
           });


              if(dto.inpTipotrans == 4 || dto.inpTipotrans == 5){
                /*dto1.iptCodinp = dto.inpCodigo;
                dto1.iptTipord = dto.iptTipord;
                dto1.iptNomord = dto.iptNomord;
                dto1.iptApeord = dto.iptApeord;
                dto1.iptCtaord = dto.iptCtaord;
                dto1.iptTipbene = dto.iptTipbene;
                dto1.iptNombene = dto.iptNombene;
                dto1.iptApebene = dto.iptApebene;
                dto1.iptCtabene = dto.iptCtabene;
                dto1.iptDetpago = dto.iptDetpago;*/
                const model1 = this.iptRepository.create(dto1);
                const newRegister1 = await this.iptRepository.save(model1);
            } 
              return insertado;
            } 
        }
      }  
      
 //CREA REGISTRO
 @ApiHeader({
    name: 'Permite CREAR los registros en <Lbt_Ipt_Entity>',
    description: 'Permite CREAR los registros en <Lbt_Ipt_Entity>',
  })
  async creaLbtIpt(dto: Create_Lbt_Ipt_Dto)
  {
    const register = await this.iptRepository.findOne({
        iptCodinp: dto.iptCodinp
   });
    if (register)
        throw new HttpException('NO SE PUEDE CREAR - El registro ya existe - (creaLbt_Ipt_Entity)', HttpStatus.FORBIDDEN);
    else {
        const model = this.iptRepository.create(dto);
        const newRegister = await this.iptRepository.save(model);
        return { message: 'Registro creado', newRegister};
    }
  }        

 //CREA REGISTRO
 @ApiHeader({
    name: 'Permite CREAR los registros en <Lbt_Ipt_Entity>',
    description: 'Permite CREAR los registros en <Lbt_Ipt_Entity>',
  })
  async insertTin(dto: Create_Lbt_Tin_Dto)
  {
    const tin = await this.tinRepository.findOne({
        tinCodigo: dto.tinCodigo
   });
    if (tin)
        throw new HttpException('NO SE PUEDE CREAR - El registro ya existe - (creaLbt_Ipt_Entity)', HttpStatus.FORBIDDEN);
    else {
        const model = this.tinRepository.create(dto);
        const newRegister = await this.tinRepository.save(model);
        return { message: 'Registro creado', newRegister};
    }
  }   

  async userData(v_usr: string, v_pwd: string, v_sis: number, v_msi: number)  {
    const parametros = {
     user: v_usr,
     pwd: v_pwd,
     codsis: v_sis,
     codmsi: v_msi
    }
    const v_user = v_usr.toUpperCase()

    const datos = await this.usrRepository.findOne({where :"UPPER(USR_USUARIO) = '"+ v_user + "' AND USR_CODROL IN (71,72,73)"});

    if(!datos)
      throw new HttpException('El Usuario no posee permisos para ingresar al Sistema', HttpStatus.FORBIDDEN);
    else{    
      const roles = await this.rolRepository.findOne({where :"ROL_CODIGO = "+ datos.usrCodrol});
      const v_rol = datos.usrCodrol
      const v_nrol = roles.rolRole
      const register = await axios.post('http://avance.cel.gob.sv:8080/cel-rest/service/login', parametros)

      const v_ccel = register.data.codcel
      if(!register || register.data.coduni == 0)
        throw new HttpException('Ha ocurrido un error al tratar de iniciar sesión en la aplicación', HttpStatus.FORBIDDEN);
      else{
        // const user = await this.authService.login({v_usr,v_ccel});
        // if (!user) {
        //   throw new UnauthorizedException();
        // }
        const accestoken = btoa('admin:admin');

        register.data.username = v_usr.toUpperCase();
        register.data.unidad = register.data.dependencia;
        register.data.rolusr = {rolCodigo: v_rol, rolRole: v_nrol };
        register.data.accessToken = accestoken;

        console.log(register.data);
        return register.data;
      }


    }
  }


}