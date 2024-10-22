import { registerDecorator, ValidationOptions } from 'class-validator';
import { isCnpj } from 'src/utils/is_cnpj.util';

export function IsCnpj(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string): void {
    registerDecorator({
      name: 'IsCnpj',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          return isCnpj(value);
        },
        defaultMessage() {
          return `CNPJ precisa ser válido.`;
        },
      },
    });
  };
}
