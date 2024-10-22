import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AddressDto {
  @ApiProperty({
    example: 'Rua das Flores',
  })
  @IsString()
  @IsNotEmpty()
  street: string;

  @ApiProperty({
    example: '123',
  })
  @IsString()
  @IsNotEmpty()
  number: string;

  @ApiProperty({
    example: 'Centro',
  })
  @IsString()
  @IsNotEmpty()
  neighborhood: string;

  @ApiProperty({
    example: 'São Paulo',
  })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty({
    example: 'SP',
  })
  @IsString()
  @IsNotEmpty()
  state: string;

  @ApiProperty({
    example: '12345678',
  })
  @IsString()
  @IsNotEmpty()
  zipcode: string;
}
