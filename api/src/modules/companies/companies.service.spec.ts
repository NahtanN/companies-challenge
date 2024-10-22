import { Test, TestingModule } from '@nestjs/testing';
import { CompaniesService } from './companies.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';
import { CompanyEntity } from './entities/company.entity';
import { CreateDto } from './dtos/create.dto';

describe('CompaniesService', () => {
  let service: CompaniesService;
  let repository: Repository<CompanyEntity>;

  const createDto: CreateDto = {
    name: 'Foo Bar',
    email: 'foo@bar.com',
    phone: '82981722040',
    cnpj: '83.220.828/0001-82',
    address: {
      number: 'dsf',
      neighborhood: 'sdfgs',
      street: 'sdfg',
      city: 'sfsg',
      state: 'AL',
      zipcode: 'sdg',
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CompaniesService,
        {
          provide: getRepositoryToken(CompanyEntity),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<CompaniesService>(CompaniesService);
    repository = module.get<Repository<CompanyEntity>>(
      getRepositoryToken(CompanyEntity),
    );
  });

  describe('create', () => {
    it('should successfully create a company', async () => {
      jest
        .spyOn(repository, 'save')
        .mockResolvedValueOnce(createDto as CompanyEntity);

      expect(await service.create(createDto)).toEqual(createDto);
    });

    it('should throw an error if create fails', async () => {
      jest.spyOn(repository, 'save').mockRejectedValue(new Error());

      await expect(service.create(createDto)).rejects.toThrow(
        new HttpException(
          'Não foi possível criar a empresa',
          HttpStatus.INTERNAL_SERVER_ERROR,
        ),
      );
    });
  });

  describe('findAll', () => {
    it('should return an array of companies', async () => {
      const companies = [
        {
          id: 5,
          name: 'asdfasdf',
          email: 'nahtann.neri@gmail.com',
          phone: '82981722040',
          cnpj: '56307532000120',
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null,
        } as CompanyEntity,
      ];
      jest.spyOn(repository, 'find').mockResolvedValue(companies);

      expect(await service.findAll()).toEqual(companies);
    });

    it('should throw an error if findAll fails', async () => {
      jest.spyOn(repository, 'find').mockRejectedValue(new Error());

      await expect(service.findAll()).rejects.toThrow(
        new HttpException(
          'Não foi possível buscar as empresas',
          HttpStatus.INTERNAL_SERVER_ERROR,
        ),
      );
    });
  });

  describe('findOne', () => {
    it('should return a single company by id', async () => {
      const company = {
        id: 5,
        name: 'asdfasdf',
        email: 'nahtann.neri@gmail.com',
        phone: '82981722040',
        cnpj: '56307532000120',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        address: {
          id: 9,
          zipcode: '57035825',
          state: 'as',
          city: 'maceio',
          neighborhood: 'Jatiuca',
          street: 'Rua Doutora Rosa Cábus',
          number: '176',
          complement: 'apt 706',
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null,
        },
      } as CompanyEntity;
      jest.spyOn(repository, 'findOne').mockResolvedValue(company);

      expect(await service.findOne(1)).toEqual(company);
    });

    it('should throw an error if findOne fails', async () => {
      jest.spyOn(repository, 'findOne').mockRejectedValue(new Error());

      await expect(service.findOne(1)).rejects.toThrow(
        new HttpException(
          'Não foi possível buscar a empresa',
          HttpStatus.INTERNAL_SERVER_ERROR,
        ),
      );
    });
  });

  describe('update', () => {
    it('should successfully update a company', async () => {
      const updatedCompany = { id: 1, ...createDto };
      jest
        .spyOn(repository, 'save')
        .mockResolvedValue(updatedCompany as CompanyEntity);
      jest
        .spyOn(repository, 'findOne')
        .mockResolvedValue(updatedCompany as CompanyEntity);

      expect(await service.update(1, createDto)).toEqual(updatedCompany);
    });

    it('should throw an error if update fails', async () => {
      jest.spyOn(repository, 'save').mockRejectedValue(new Error());

      await expect(service.update(1, createDto)).rejects.toThrow(
        new HttpException(
          'Não foi possível atualizar a empresa',
          HttpStatus.INTERNAL_SERVER_ERROR,
        ),
      );
    });
  });

  describe('delete', () => {
    it('should successfully delete a company', async () => {
      jest.spyOn(repository, 'softDelete').mockResolvedValue(undefined);

      expect(await service.delete(1)).toEqual({
        message: 'Empresa deletada com sucesso',
      });
    });

    it('should throw an error if delete fails', async () => {
      jest.spyOn(repository, 'softDelete').mockRejectedValue(new Error());

      await expect(service.delete(1)).rejects.toThrow(
        new HttpException(
          'Não foi possível deletar a empresa',
          HttpStatus.INTERNAL_SERVER_ERROR,
        ),
      );
    });
  });
});
