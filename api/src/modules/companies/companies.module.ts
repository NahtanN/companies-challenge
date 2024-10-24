import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressEntity } from '../addresses/entities/address.entity';
import { CompanyEntity } from './entities/company.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AddressEntity, CompanyEntity])],
  controllers: [CompaniesController],
  providers: [CompaniesService],
  exports: [CompaniesService],
})
export class CompaniesModule {}
