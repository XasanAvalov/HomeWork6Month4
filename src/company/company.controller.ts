import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { Company } from './models/company.model';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('company')
export class CompanyController {
    constructor(private readonly companyService: CompanyService){}

    @Post('create')
    createCompany(@Body() createCompanyDto: CreateCompanyDto): Promise<Company> {
        return this.companyService.createCompany(createCompanyDto);
    }

    @Get('findAll')
    findAllCompany():Promise<Company[]> {
        return this.companyService.findAllCompany()
    }

    @Get('findOne/:id')
    findOneCompany(@Param('id') id: number):Promise<Company> {
        return this.companyService.findOneCompany(id)
    }

    @Put('update/:id')
    updateCompany(@Param('id') id: number, @Body() updateCompany: UpdateCompanyDto){
        return this.companyService.updateCompany(id, updateCompany);
    }

    @Delete('delete/:id')
    deleteCompany(@Param('id') id: number){
        return this.companyService.deleteCompany(id)
    }
}
