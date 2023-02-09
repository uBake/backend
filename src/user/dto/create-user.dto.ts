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
}
