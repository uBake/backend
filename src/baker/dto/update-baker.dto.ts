import { PartialType } from '@nestjs/mapped-types';
import { CreateBakerDto } from './create-baker.dto';

export class UpdateBakerDto extends PartialType(CreateBakerDto) {}
