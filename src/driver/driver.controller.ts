import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DriverService } from './driver.service';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { Driver } from './models/driver.model';
import { CreateDriverDto } from './dto/create-driver.dto';

@Controller('driver')
export class DriverController {
    constructor(private readonly driverService: DriverService){}

    @Post('create')
    createCompany(@Body() createDriverDto: CreateDriverDto): Promise<Driver> {
        return this.driverService.createDriver(createDriverDto);
    }

    @Get('findAll')
    findAllCompany():Promise<Driver[]> {
        return this.driverService.findAllDriver()
    }

    @Get('findOne/:id')
    findOneCompany(@Param('id') id: number):Promise<Driver> {
        return this.driverService.findOneDriver(id)
    }

    @Put('update/:id')
    updateCompany(@Param('id') id: number, @Body() updateDraverDto: UpdateDriverDto){
        return this.driverService.updateDriver(id, updateDraverDto);
    }

    @Delete('delete/:id')
    deleteCompany(@Param('id') id: number){
        return this.driverService.deleteDriver(id)
    }
}
