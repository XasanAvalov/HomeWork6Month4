import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Company } from './models/company.model';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
    constructor(@InjectModel(Company) private companyRepo: typeof Company){}

    async createCompany(createCompanyDto: CreateCompanyDto):Promise<Company> {
        const company = await this.companyRepo.create(createCompanyDto);
        return company;
    }

    findAllCompany():Promise<Company[]> {
        return this.companyRepo.findAll()
    }

    findOneCompany(id: number):Promise<Company> {
        return this.companyRepo.findByPk(id);
    }

    async updateCompany(id: number, updateCompanyDto: UpdateCompanyDto){
        const updateCompany = await this.companyRepo.update(updateCompanyDto, {where: {id}, returning:true});

        return updateCompany;
    }

    async deleteCompany(id: number):Promise<number>{
        const company = await this.companyRepo.destroy({where: {id}});
        return company;
    }
}
