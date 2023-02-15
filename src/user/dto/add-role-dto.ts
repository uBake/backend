import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AddRoleDto {
  @IsNotEmpty({ message: 'Must not be empty' })
  @IsString({ message: 'Must be a string' })
  readonly value: string;

  @IsNumber({}, { message: 'Must be a number' })
  readonly userId: number;
}
