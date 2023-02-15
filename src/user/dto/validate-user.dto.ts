import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ValidateUserDto {
  @ApiProperty({
    example: 'email@test.com',
    description: 'Unique email',
  })
  @IsNotEmpty({ message: 'Must not be empty' })
  @IsString({ message: 'Must be a string' })
  @IsEmail({}, { message: 'Incorrect email' })
  readonly email: string;

  @ApiProperty({
    example: 'password',
    description: 'User password',
  })
  @IsNotEmpty({ message: 'Must not be empty' })
  @IsString({ message: 'Must be a string' })
  readonly password: string;
}
