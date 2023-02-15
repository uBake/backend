import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRoleDto {
  @IsNotEmpty({ message: 'Must not be empty' })
  @IsString({ message: 'Must be a string' })
  readonly value: string;

  @IsNotEmpty({ message: 'Must not be empty' })
  @IsString({ message: 'Must be a string' })
  readonly description: string;
}
