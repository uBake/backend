import { Injectable } from '@nestjs/common';
import { CreateBudgetChangeDto } from './dto/create-budget-change.dto';
import { UpdateBudgetChangeDto } from './dto/update-budget-change.dto';

@Injectable()
export class BudgetChangeService {
  create(createBudgetChangeDto: CreateBudgetChangeDto) {
    return 'This action adds a new budgetChange';
  }

  findAll() {
    return `This action returns all budgetChange`;
  }

  findOne(id: number) {
    return `This action returns a #${id} budgetChange`;
  }

  update(id: number, updateBudgetChangeDto: UpdateBudgetChangeDto) {
    return `This action updates a #${id} budgetChange`;
  }

  remove(id: number) {
    return `This action removes a #${id} budgetChange`;
  }
}
