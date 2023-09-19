import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Builder } from './models/builder.model';
import { CreateBuilderDto } from './dto/create-builder';
import { UpdateBuilderDto } from './dto/update-builder';

@Injectable()
export class BuilderService {
    constructor(@InjectModel(Builder) private builderRepo: typeof Builder){}

    async createBuilder(createBuilderDto: CreateBuilderDto):Promise<Builder>{
        const createData =  await this.builderRepo.create(createBuilderDto)
        return createData
    }

    findAllBuilder():Promise<Builder[]> {
        return this.builderRepo.findAll()
    }

    findOneBulder(id: number):Promise<Builder> {
        return this.builderRepo.findByPk(id);
    }

    updateBulder(id: number, updateBuilderDto: UpdateBuilderDto){
        return this.builderRepo.update(updateBuilderDto, {where: {id}, returning: true})
    }

    async deleteBulder(id: number):Promise<number>{
        const deleteData = await this.builderRepo.destroy({where: {id}})
        return deleteData;
    }
}
