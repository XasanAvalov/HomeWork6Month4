import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { MachineDriver } from './models/machine-driver.model';
import { CreateMachineDriverDto } from './dto/create-machine-driver.dto';
import { UpdateMachineDriverDto } from './dto/update-machine-driver.dto';
import { where } from 'sequelize';

@Injectable()
export class MachineDriverService {
    constructor(@InjectModel(MachineDriver) private machineDriverRepo: typeof MachineDriver){}
    
    async create(createMachineDriverDto: CreateMachineDriverDto):Promise<MachineDriver>{
        return await this.machineDriverRepo.create(createMachineDriverDto)
    }

    findAll():Promise<MachineDriver[]>{
        return this.machineDriverRepo.findAll()
    }

    findOne(id: number):Promise<MachineDriver>{
        return this.machineDriverRepo.findByPk(id)
    }

    async update(id: number, updateMachineDriverDto: UpdateMachineDriverDto){
        return await this.machineDriverRepo.update(updateMachineDriverDto, {where: {id}, returning: true})
    }

    async delete(id: number):Promise<number>{
        return this.machineDriverRepo.destroy({where: {id}})
    }
}
