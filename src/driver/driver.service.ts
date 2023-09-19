import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Driver } from './models/driver.model';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';

@Injectable()
export class DriverService {
    constructor(@InjectModel(Driver) private driverRepo: typeof Driver){}

    async createDriver(createDriverDto: CreateDriverDto):Promise<Driver> {
        return await this.driverRepo.create(createDriverDto);
    }

    findAllDriver():Promise<Driver[]> {
        return this.driverRepo.findAll()
    }

    findOneDriver(id: number):Promise<Driver> {
        return this.driverRepo.findByPk(id);
    }

    async updateDriver(id: number, updateDriverDto: UpdateDriverDto){
        return await this.driverRepo.update(updateDriverDto, {where: {id}, returning:true});
    }

    async deleteDriver(id: number):Promise<number>{
        return await this.driverRepo.destroy({where: {id}});
    }
}
