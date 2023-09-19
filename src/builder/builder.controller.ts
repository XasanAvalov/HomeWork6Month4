import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BuilderService } from './builder.service';
import { Builder } from './models/builder.model';
import { CreateBuilderDto } from './dto/create-builder';
import { UpdateBuilderDto } from './dto/update-builder';

@Controller('builder')
export class BuilderController {
    constructor(private readonly builderService: BuilderService){}

    @Post('create')
    create(@Body() createBuilderDto: CreateBuilderDto):Promise<Builder> {
        return this.builderService.createBuilder(createBuilderDto)
    }

    @Get('findAll')
    findAllBuilder():Promise<Builder[]>{
        return this.builderService.findAllBuilder()
    }

    @Get('findOne/:id')
    findOneBuilder(@Param('id') id: number):Promise<Builder>{
        return this.builderService.findOneBulder(id)
    }

    @Put('update/:id')
    updateBuillder(@Param('id') id: number, @Body() updateBuilderDto: UpdateBuilderDto){
        return this.builderService.updateBulder(id, updateBuilderDto)
    }

    @Delete('delete/:id')
    deleteBuilder(@Param('id') id: number){
        return this.builderService.deleteBulder(id)
    }
}
