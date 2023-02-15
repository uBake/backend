import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'email@test.com',
    description: 'Unique email',
  })
  @IsString({ message: 'Must be a string' })
  @IsEmail({}, { message: 'Incorrect email' })
  readonly email: string;

  @ApiProperty({
    example: 'password',
    description: 'User password',
  })
  @IsString({ message: 'Must be a string' })
  @Length(8, 35, {
    message:
      'Password must be at least 8 characters long and not longer than 35 characters',
  })
  readonly password: string;

  @ApiProperty({
    example: 'Name Surname',
    description: 'User name',
  })
  @IsString({ message: 'Must be a string' })
  readonly name: string;
}
