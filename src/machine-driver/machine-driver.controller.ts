import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MachineDriverService } from './machine-driver.service';
import { CreateMachineDriverDto } from './dto/create-machine-driver.dto';
import { MachineDriver } from './models/machine-driver.model';
import { UpdateMachineDriverDto } from './dto/update-machine-driver.dto';

@Controller('machine-driver')
export class MachineDriverController {
    constructor(private readonly machineDriverService: MachineDriverService){}

    @Post('create')
    create(@Body() createMachineDriverDto: CreateMachineDriverDto):Promise<MachineDriver> {
        return this.machineDriverService.create(createMachineDriverDto)
    }

    @Get('findAll')
    findAll():Promise<MachineDriver[]> {
        return this.machineDriverService.findAll()
    }

    @Get('findOne/:id')
    findOne(@Param('id') id: number){
        return this.machineDriverService.findOne(id)
    }

    @Put('update/:id')
    update(@Param('id') id: number, @Body() updateMachineDriverDto: UpdateMachineDriverDto){
        return this.machineDriverService.update(id, updateMachineDriverDto)
    }

    @Delete('delete/:id')
    delete(@Param('id') id: number){
        return this.machineDriverService.delete(id)
    }
}
