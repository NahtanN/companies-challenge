import { applyDecorators } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

export function CreateDocs() {
  return applyDecorators(
    ApiOperation({
      summary: 'Cadastrar nova empresa.',
    }),
    ApiResponse({
      status: 201,
      schema: {
        example: {
          name: 'Schroeder LLC',
          email: 'Emmitt42@hotmail.com',
          phone: '82981722040',
          cnpj: '83220828000182',
          address: {
            streat: 'asdf',
            number: 'dsf',
            neighborhood: 'sdfgs',
            street: 'sdfg',
            city: 'sfsg',
            state: 'AL',
            zipCode: 'sdg',
            zipcode: null,
            complement: null,
            id: 5,
            createdAt: '2024-10-22T02:31:26.000Z',
            updatedAt: '2024-10-22T02:31:26.000Z',
            deletedAt: null,
          },
          id: 3,
          createdAt: '2024-10-22T02:31:26.000Z',
          updatedAt: '2024-10-22T02:31:26.000Z',
          deletedAt: null,
        },
      },
    }),
    ApiInternalServerErrorResponse({
      schema: {
        example: {
          statusCode: 500,
          message: 'Não foi possível criar a empresa',
        },
      },
    }),
  );
}
