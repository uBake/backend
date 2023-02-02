import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'email@test.com',
    description: 'Unique email',
  })
  readonly email: string;
  @ApiProperty({
    example: 'password',
    description: 'User password',
  })
  readonly password: string;
  @ApiProperty({
    example: 'Name Surname',
    description: 'User name',
  })
  readonly name: string;
  @ApiProperty({
    example: 'nickname',
    description: 'Unique nickname',
  })
  readonly nickname: string;
  @ApiProperty({
    example: '3329250464',
    description: 'Unique phone',
  })
  readonly phone: string;
}
