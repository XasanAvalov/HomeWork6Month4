import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { CompanyModule } from './company/company.module';
import { Company } from './company/models/company.model';
import { BuilderModule } from './builder/builder.module';
import { Builder } from './builder/models/builder.model';
import { MachineModule } from './machine/machine.module';
import { Machine } from './machine/models/machine.model';
import { MachineDriver } from './machine-driver/models/machine-driver.model';
import { MachineDriverModule } from './machine-driver/machine-driver.module';
import { DriverModule } from './driver/driver.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [Company, Builder, Machine, MachineDriver],
      autoLoadModels: true,
      logging: true
    }),
    CompanyModule,
    BuilderModule,
    MachineModule,
    MachineDriverModule,
    DriverModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
