import { ApiProperty } from '@nestjs/swagger';

export class ValidateUserDto {
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
}
