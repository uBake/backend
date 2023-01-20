import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BudgetChangeService } from './budget-change.service';
import { CreateBudgetChangeDto } from './dto/create-budget-change.dto';
import { UpdateBudgetChangeDto } from './dto/update-budget-change.dto';

@Controller('budget-change')
export class BudgetChangeController {
  constructor(private readonly budgetChangeService: BudgetChangeService) {}

  @Post()
  create(@Body() createBudgetChangeDto: CreateBudgetChangeDto) {
    return this.budgetChangeService.create(createBudgetChangeDto);
  }

  @Get()
  findAll() {
    return this.budgetChangeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.budgetChangeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBudgetChangeDto: UpdateBudgetChangeDto) {
    return this.budgetChangeService.update(+id, updateBudgetChangeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.budgetChangeService.remove(+id);
  }
}
