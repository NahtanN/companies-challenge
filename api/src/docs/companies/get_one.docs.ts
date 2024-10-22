import { applyDecorators } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

export function FindOneDocs() {
  return applyDecorators(
    ApiOperation({
      summary: 'Buscar uma empresa.',
    }),
    ApiResponse({
      status: 200,
      schema: {
        example: {
          id: 5,
          name: 'Foo Bar',
          email: 'foo@bar.com',
          phone: '82981722040',
          cnpj: '56307532000120',
          createdAt: '2024-10-22T13:45:05.000Z',
          updatedAt: '2024-10-22T13:45:05.000Z',
          deletedAt: null,
          address: {
            id: 9,
            zipcode: '01419002',
            state: 'as',
            city: 'São Paulo',
            neighborhood: 'Jardim Paulista',
            street: 'Alameda Santos',
            number: '1293',
            complement: 'apt 1001',
            createdAt: '2024-10-22T13:45:05.000Z',
            updatedAt: '2024-10-22T13:45:05.000Z',
            deletedAt: null,
          },
        },
      },
    }),
    ApiInternalServerErrorResponse({
      schema: {
        example: {
          statusCode: 500,
          message: 'Não foi possível buscar a empresa',
        },
      },
    }),
  );
}
