import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class BanUserDto {
  @IsNumber({}, { message: 'Must be a number' })
  readonly userId: number;

  @IsNotEmpty({ message: 'Must not be empty' })
  @IsString({ message: 'Must be a string' })
  readonly banReason: string;
}
