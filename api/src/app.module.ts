import { Module } from '@nestjs/common';
import { CompaniesModule } from './modules/companies/companies.module';
import { TypeOrmDatabaseModule } from './providers/typeorm/typeorm.module';

@Module({
  imports: [TypeOrmDatabaseModule, CompaniesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
