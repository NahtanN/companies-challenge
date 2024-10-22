import { applyDecorators } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

export function DeleteDocs() {
  return applyDecorators(
    ApiOperation({
      summary: 'Deletar uma empresa.',
    }),
    ApiResponse({
      status: 200,
      schema: {
        example: {
          message: 'Empresa deletada com sucesso',
        },
      },
    }),
    ApiInternalServerErrorResponse({
      schema: {
        example: {
          statusCode: 500,
          message: 'Não foi possível deletar a empresa',
        },
      },
    }),
  );
}
