import { PipeTransform, Injectable } from '@nestjs/common';
import { CreateDto } from 'src/modules/companies/dtos/create.dto';

@Injectable()
export class SanitizeCnpj implements PipeTransform {
  transform(value: CreateDto) {
    value.cnpj = value.cnpj.replace(/\D/g, '');
    return value;
  }
}
