import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MachineService } from './machine.service';
import { CreateMachineDto } from './dto/create-machine.dto';
import { Machine } from './models/machine.model';
import { UpdateMachineDto } from './dto/update-machine.dto';

@Controller('machine')
export class MachineController {
    constructor(private readonly machineService: MachineService){}

    @Post('create')
    create(@Body() createMachineDto: CreateMachineDto):Promise<Machine> {
        return this.machineService.createMachine(createMachineDto)
    }

    @Get('findAll')
    findAll():Promise<Machine[]> {
        return this.machineService.findAllMachine()
    }

    @Get('findOne/:id')
    findOne(@Param('id') id: number):Promise<Machine> {
        return this.machineService.findOneMachine(id)
    }

    @Put('update/:id')
    update(@Param('id') id: number, @Body() updateMachineDto: UpdateMachineDto){
        return this.machineService.updateMachine(id, updateMachineDto)
    }

    @Delete('delete/:id')
    delete(@Param('id') id: number){
        return this.machineService.deleteMachine(id)
    }
}
