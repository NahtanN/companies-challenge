import { applyDecorators } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

export function FindAllDocs() {
  return applyDecorators(
    ApiOperation({
      summary: 'Buscar todas as empresas.',
    }),
    ApiResponse({
      status: 200,
      schema: {
        example: [
          {
            id: 5,
            name: 'Foo Bar',
            email: 'foo@bar.com',
            phone: '82981722040',
            cnpj: '56307532000120',
            createdAt: '2024-10-22T13:45:05.000Z',
            updatedAt: '2024-10-22T13:45:05.000Z',
            deletedAt: null,
          },
        ],
      },
    }),
    ApiInternalServerErrorResponse({
      schema: {
        example: {
          statusCode: 500,
          message: 'Não foi possível buscar as empresas',
        },
      },
    }),
  );
}
