import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateDto } from './dtos/create.dto';
import { SanitizeCnpj } from 'src/pipes/sanitize_cnpj.pipe';
import { CreateDocs } from 'src/docs/companies/create.docs';
import { UpdateDocs } from 'src/docs/companies/update.docs';
import { FindAllDocs } from 'src/docs/companies/find_all.docs';
import { FindOneDocs } from 'src/docs/companies/get_one.docs';
import { DeleteDocs } from 'src/docs/companies/delete.docs';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('companies')
@ApiBearerAuth()
@Controller('companies')
export class CompaniesController {
  constructor(private readonly service: CompaniesService) {}

  @FindAllDocs()
  @Get()
  async findAll() {
    return this.service.findAll();
  }

  @FindOneDocs()
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @CreateDocs()
  @Post()
  async create(@Body(SanitizeCnpj) createDto: CreateDto) {
    return this.service.create(createDto);
  }

  @UpdateDocs()
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(SanitizeCnpj) updateDto: CreateDto,
  ) {
    return this.service.update(id, updateDto);
  }

  @DeleteDocs()
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.delete(id);
  }
}
