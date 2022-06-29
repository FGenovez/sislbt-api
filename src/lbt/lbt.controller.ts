import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LbtService } from './lbt.service';

import { Lbt_Tin_Entity } from './entities/lbt_tin_entity';
import { Lbt_Top_Entity } from './entities/lbt_top_entity';
import { Lbt_Tpa_Entity } from './entities/lbt_tpa_entity';
import { Lbt_Inp_Entity } from './entities/lbt_inp_entity';
import { Lbt_Tdv_Entity } from './entities/lbt_tdv_entity';

import { Create_Lbt_Inp_Dto } from './dto/create_lbt_inp_dto';
import { Create_Lbt_Ipt_Dto } from './dto/create_lbt_ipt_dto';
import { Create_Lbt_Tdv_Dto } from './dto/create_lbt_tdv_dto';

import { Edit_Lbt_Tin_Dto } from './dto/edit_lbt_tin_dto';
import { Edit_Lbt_Top_Dto } from './dto/edit_lbt_top_dto';
import { Edit_Lbt_Tpa_Dto } from './dto/edit_lbt_tpa_dto';
import { Edit_Lbt_Tdv_Dto } from './dto/edit_lbt_tdv_dto';
import { Edit_Lbt_Ipt_Dto } from './dto/edit_lbt_ipt_dto';
import { Edit_Lbt_Inp_Dto } from './dto/edit_lbt_inp_dto';

import { AuthGuard } from '@nestjs/passport';
import { Create_Lbt_Tin_Dto } from './dto/create_lbt_tin_dto';
import { Sis_Usr_Entity } from './entities/sis_usr_entity';
import { Lbt_Ipt_Entity } from './entities/lbt_ipt_entity';


@ApiTags('SisLBT')
@Controller('lbt/')
export class LbtController {
constructor(private lbtService: LbtService) { }

/////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////Métodos GET////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

    


    @Get('instrucciones/tin/all')
    @UseGuards(AuthGuard('basic')) 
    @ApiOperation({ summary: 'Consulta de todos los registros del catálogo de tipos de instrucción' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de todos los registros del catálogo de tipos de instrucción',
        type: [Lbt_Tin_Entity],
    })
    async buscaTodosTin() {
        const data = await this.lbtService.buscaTodosTin();
        return data;
    }

    @Get('instrucciones/ton/all')
    @UseGuards(AuthGuard('basic'))
    @ApiOperation({ summary: 'Consulta de todos los registros del catálogo de tipos de operación' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de todos los registros del catálogo de tipos de operación',
        type: [Lbt_Top_Entity],
    })
    async buscaTodosTop() {
        const data = await this.lbtService.buscaTodosTop();
        return data;
    }    

    @Get('instrucciones/tpa/all')
    @UseGuards(AuthGuard('basic')) 
    @ApiOperation({ summary: 'Consulta de todos los registros del catálogo de tipos de pago' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de todos los registros del catálogo de tipos de pago',
        type: [Lbt_Tpa_Entity],
    })
    async buscaTodosTpa() {
        const data = await this.lbtService.buscaTodosTpa();
        return data;
    }  
    
    @Get('instrucciones/tdv/all')
    @UseGuards(AuthGuard('basic')) 
    @ApiOperation({ summary: 'Consulta de todos los registros del catálogo de tipos de devolución' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de todos los registros del catálogo de tipos de devolución',
        type: [Lbt_Tdv_Entity],
    })
    async buscaTodosTdv() {
        const data = await this.lbtService.buscaTodosTdv();
        return data;
    } 

    @Get('instrucciones/all')
    @UseGuards(AuthGuard('basic')) 
    @ApiOperation({ summary: 'Consulta de todos los registros del instrucciones de pago' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de todos los registros del instrucciones de pago',
        type: [Lbt_Inp_Entity],
    })
    async buscaTodosInp() {
        const data = await this.lbtService.buscaTodosInp();
        return data;
    } 
    
    @Get('instrucciones/inp')
    @UseGuards(AuthGuard('basic'))
    @ApiOperation({ summary: 'Consulta por la llave de instrucciones de pago {:inpCodigo} ' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta por la llave de instrucciones de pago {:inpCodigo}',
        type: [Lbt_Inp_Entity],
    })
    async buscaPorInp(
        @Query('inpCodigo') v_cod: number, 
    ) {
        const data = await this.lbtService.buscaPorInp(v_cod);
        return data;
    }

    @Get('instrucciones/inp/codbcr/')
    @UseGuards(AuthGuard('basic'))
    @ApiOperation({ summary: 'Consulta de instrucciones de pago por {:inpCodbcr}' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de instrucciones de pago por {:inpCodbcr}',
        type: [Lbt_Inp_Entity],
    })
    async buscaPorInpCodbcr(
        @Query('inpCodbcr') v_cod: number, 
    ) {
        const data = await this.lbtService.buscaPorInpCodbcr(v_cod);
        return data;
    }

    @Get('instrucciones/search/')
    @UseGuards(AuthGuard('basic'))
    @ApiOperation({ summary: 'Consulta de instrucciones de pago por {:inpConcepto}' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de instrucciones de pago por {:query}',
        type: [Lbt_Inp_Entity],
    })
    async buscaPorInpConcepto(
        @Query('query') v_cod: string, 
    ) {
        const data = await this.lbtService.buscaPorInpConcepto(v_cod);
        return data;
    }


    /////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////Métodos PUT////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////
    @Patch('instrucciones/inp')
    @UseGuards(AuthGuard('basic')) 
    @ApiOperation({summary: 'Actualiza por la llave de instrucciones de pago {:inpCodigo}' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Actualiza por la llave de instrucciones de pago {:inpCodigo}',
        type: [Lbt_Inp_Entity],
      })     
    async actualizaInsPago(
     @Body() dto, dto1, dto2): Promise<{ message: string; dto: Edit_Lbt_Inp_Dto; }> {
        //console.log(dto);
        const data = await this.lbtService.actualizaInsPago( dto, dto1, dto2);
        return { message: 'Registro actualizado', dto };
    }

    @Put('instrucciones/ipt')
    @UseGuards(AuthGuard('basic')) 
    @ApiOperation({ summary: 'Permite ACTUALIZAR en tabla Intrucciones pago terceros {iptCodigo}' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Permite ACTUALIZAR Instrucciones de pago <Lbt_Ipt_Entity>',
        type: [Lbt_Ipt_Entity],
      })     
    async actualizaInsPagoTer(
     @Query('iptCodigo') v_cod: number,
     @Body() dto: Edit_Lbt_Ipt_Dto) {
        const data = await this.lbtService.actualizaInsPagoTer( v_cod, dto);
        return { message: 'Registro actualizado', data };
    }

    @Put('instrucciones/tin')
    @UseGuards(AuthGuard('basic')) 
    @ApiOperation({ summary: 'Permite ACTUALIZAR en tabla tipos de instruccion {tinCodigo}' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Permite ACTUALIZAR en <Lbt_Tin_Entity>',
        type: [Lbt_Tin_Entity],
      })     
    async updateTin(
     @Query('tinCodigo') v_cod: string,
     @Body() dto: Edit_Lbt_Tin_Dto) {
        const data = await this.lbtService.updateTin( v_cod, dto);
        return { message: 'Registro actualizado', data };
    }

    @Put('instrucciones/top')
    @UseGuards(AuthGuard('basic')) 
    @ApiOperation({ summary: 'Permite ACTUALIZAR en tabla de tipos de operacion {topCodigo}/{topCodtin}' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Permite ACTUALIZAR en <Lbt_Top_Entity>',
        type: [Lbt_Tin_Entity],
      })     
    async updateTop(
     @Query('topCodigo') v_cod: string,
     @Query('topCodtin') v_tin: string,
     @Body() dto: Edit_Lbt_Top_Dto) {
        const data = await this.lbtService.updateTop( v_cod,v_tin, dto);
        return { message: 'Registro actualizado', data };
    }

    @Put('instrucciones/tpa')
    @UseGuards(AuthGuard('basic')) 
    @ApiOperation({ summary: 'Permite ACTUALIZAR en tipos de pago {tpaCodigo}' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Permite ACTUALIZAR en tipos de pago {tpaCodigo}',
        type: [Lbt_Tpa_Entity],
      })     
    async updateTpa(
     @Query('tpaCodigo') v_cod: string,
     @Body() dto: Edit_Lbt_Tpa_Dto) {
        const data = await this.lbtService.updateTpa( v_cod, dto);
        return { message: 'Registro actualizado', data };
    }

    @Put('instrucciones/tdv')
    @UseGuards(AuthGuard('basic')) 
    @ApiOperation({ summary: 'Permite ACTUALIZAR en tabla tipos de devolución {tdvCodigo}' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Permite ACTUALIZAR en tabla tipos de devolución {tdvCodigo}',
        type: [Lbt_Tdv_Entity],
      })     
    async updateTdv(
     @Query('tdvCodigo') v_cod: string,
     @Body() dto: Edit_Lbt_Tdv_Dto) {
        const data = await this.lbtService.updateTdv( v_cod, dto);
        return { message: 'Registro actualizado', data };
    }

    /////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////Métodos DELET//////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////

    @UseGuards(AuthGuard('basic'))      
    @Delete('instrucciones/inp')
    @ApiOperation({ summary: 'Borra registro de la tabla instrucciones de pago {inpCodigo}' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Borra registro de la tabla instrucciones de pago {inpCodigo}',
        type: [Lbt_Inp_Entity],
        })     
    async deleteInp(
        @Query('inpCodigo') v_cod: number,
        @Body() dto: Edit_Lbt_Inp_Dto) { 
        const data = await this.lbtService.deleteInp(v_cod);
        return { message: 'Registro eliminado', data };
    } 

    @UseGuards(AuthGuard('basic'))      
    @Delete('instrucciones/tin')
    @ApiOperation({ summary: 'Borra en <Lbt_Tin_Entity>' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Borra en <Lbt_Tin_Entity>',
        type: [Lbt_Tin_Entity],
      })     
    async deleteTin(
    @Query('tinCodigo') v_cod: string,
        @Body() dto: Edit_Lbt_Tin_Dto) { 
        const data = await this.lbtService.deleteTin(v_cod);
        return { message: 'Registro eliminado', data };
    }

    @UseGuards(AuthGuard('basic'))      
    @Delete('instrucciones/top')
    @ApiOperation({ summary: 'Elimina registro en tabla de tipos de opración {topCodigo},{topCodtin}' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Elimina registro en tabla de tipos de opración {topCodigo},{topCodtin}',
        type: [Lbt_Tin_Entity],
        })     
    async deleteTop(
        @Query('topCodigo') v_cod: string,
        @Query('topCodtin') v_tin: string,
        @Body() dto: Edit_Lbt_Top_Dto) { 
        const data = await this.lbtService.deleteTop(v_cod, v_tin);
        return { message: 'Registro eliminado', data };
    }    

    @UseGuards(AuthGuard('basic'))      
    @Delete('instrucciones/tpa')
    @ApiOperation({ summary: 'Elimina registro de la tabla de tipos de pago {tpaCodigo}' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Elimina registro de la tabla de tipos de pago {tpaCodigo}',
        type: [Lbt_Tpa_Entity],
        })     
    async deleteTpa(
        @Query('tpaCodigo') v_cod: string,
        @Body() dto: Edit_Lbt_Tpa_Dto) { 
        const data = await this.lbtService.deleteTpa(v_cod);
        return { message: 'Registro eliminado', data };
    } 

    @UseGuards(AuthGuard('basic'))      
    @Delete('instrucciones/tdv')
    @ApiOperation({ summary: 'Borra registro <Lbt_Tdv_Entity>' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Borra registro <Lbt_Tdv_Entity>',
        type: [Lbt_Tdv_Entity],
        })     
    async deleteTdv(
        @Query('tdvCodigo') v_cod: string,
        @Body() dto: Edit_Lbt_Tdv_Dto) { 
        const data = await this.lbtService.deleteTdv(v_cod);
        return { message: 'Registro eliminado', data };
    }    

    /////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////Métodos POST///////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////    

    @Post('instrucciones/inp')
    @UseGuards(AuthGuard('basic')) 
    @ApiOperation({ summary: 'Permite CREAR los registros en tabla de instrucciones de pago' })
    @ApiResponse({
     status: HttpStatus.OK,
     description: 'Permite CREAR los registros en tabla de instrucciones de pago',
     type: [Lbt_Inp_Entity],
   })    
    async creaLbtInp(@Body() datos: Create_Lbt_Inp_Dto, datos1: Create_Lbt_Inp_Dto) {
        const data = await this.lbtService.creaLbtInp(datos, datos1);
        return { message: 'Registro creado', data };
     }
    @Post('instrucciones/tin')
    @UseGuards(AuthGuard('basic')) 
    @ApiOperation({ summary: 'Permite CREAR los registros en tabla de tipos de instrucción' })
    @ApiResponse({
    status: HttpStatus.OK,
    description: 'Permite CREAR los registros en tabla de tipos de instrucción',
    type: [Lbt_Tin_Entity],
})    
    async insertTin(@Body() datos: Create_Lbt_Tin_Dto) {
        const data = await this.lbtService.insertTin(datos);
        return { message: 'Registro creado', datos };
    }


     @Post('instrucciones/ipt')
     @UseGuards(AuthGuard('basic')) 
     @ApiOperation({ summary: 'Permite CREAR los registros tabla de instrucciones de pagos a terceros' })
     @ApiResponse({
      status: HttpStatus.OK,
      description: 'Permite CREAR los registros tabla de instrucciones de pagos a terceros',
      type: [Lbt_Inp_Entity],
    })    
     async creaLbtIpt(@Body() datos: Create_Lbt_Ipt_Dto) {
         const data = await this.lbtService.creaLbtIpt(datos);
         return { message: 'Registro creado', data };
      }

    @Post('/auth/sign-in')
    @ApiOperation({ summary: 'Permite verificar si el usuario que ingresa posee permisos - generación de token' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Permite verificar si el usuario que ingresa posee permisos - generación de token ',
        type: [Sis_Usr_Entity],
    }) 
    async login(
        @Body('user') v_usr: string,
        @Body('pwd') v_pwd: string,
        @Body('codsis') v_sis: number,
        @Body('codmsi') v_msi: number
        ): Promise<any>{
            console.log('Entra');
        const data = await this.lbtService.userData(v_usr, v_pwd, v_sis, v_msi);
        console.log('Prueba:',data)
        if (!data) {return []}
        else {return data;}
    }

    }
