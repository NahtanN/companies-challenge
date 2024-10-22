import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { AddressDto } from './address.dto';
import { Type } from 'class-transformer';
import { IsCnpj } from 'src/validators/is_cnpj.validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDto {
  @ApiProperty({
    example: 'Schroeder LLC',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'foo@bar.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: '82981722040',
  })
  @IsPhoneNumber('BR')
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    example: '83220828000182',
  })
  @IsCnpj()
  @IsNotEmpty()
  cnpj: string;

  @ApiProperty({
    type: AddressDto,
  })
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => AddressDto)
  address: AddressDto;
}
