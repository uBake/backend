import { PartialType } from '@nestjs/mapped-types';
import { CreateBudgetChangeDto } from './create-budget-change.dto';

export class UpdateBudgetChangeDto extends PartialType(CreateBudgetChangeDto) {}
