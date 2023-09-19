import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Machine } from './models/machine.model';
import { CreateMachineDto } from './dto/create-machine.dto';
import { UpdateMachineDto } from './dto/update-machine.dto';

@Injectable()
export class MachineService {
    constructor(@InjectModel(Machine) private machineRepo: typeof Machine){}

    async createMachine(createMachineDto: CreateMachineDto):Promise<Machine> {
        return await this.machineRepo.create(createMachineDto)
    }

    findAllMachine():Promise<Machine[]>{
        return this.machineRepo.findAll()
    }

    findOneMachine(id: number):Promise<Machine>{
        return this.machineRepo.findByPk(id)
    }

    updateMachine(id: number, updateMachineDto: UpdateMachineDto){
        return this.machineRepo.update(updateMachineDto, {where: {id}, returning: true})
    }

    async deleteMachine(id: number){
        return await this.machineRepo.destroy({where: {id}})
    }
}
