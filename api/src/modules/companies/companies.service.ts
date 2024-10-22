import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyEntity } from './entities/company.entity';
import { Repository } from 'typeorm';
import { CreateDto } from './dtos/create.dto';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(CompanyEntity)
    private readonly companyRepository: Repository<CompanyEntity>,
  ) {}

  async create(createDto: CreateDto) {
    try {
      return await this.companyRepository.save(createDto);
    } catch (error) {
      throw new HttpException(
        'Não foi possível criar a empresa',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    try {
      return await this.companyRepository.find();
    } catch (error) {
      throw new HttpException(
        'Não foi possível buscar as empresas',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: number) {
    try {
      return await this.companyRepository.findOne({
        where: { id },
        relations: {
          address: true,
        },
      });
    } catch (error) {
      throw new HttpException(
        'Não foi possível buscar a empresa',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: number, updateDto: CreateDto) {
    try {
      await this.companyRepository.save({
        id,
        ...updateDto,
      });
      return await this.companyRepository.findOne({
        where: { id },
      });
    } catch (error) {
      throw new HttpException(
        'Não foi possível atualizar a empresa',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async delete(id: number) {
    try {
      await this.companyRepository.softDelete(id);
      return { message: 'Empresa deletada com sucesso' };
    } catch (error) {
      throw new HttpException(
        'Não foi possível deletar a empresa',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
