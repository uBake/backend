import { Module } from '@nestjs/common';
import { BudgetChangeService } from './budget-change.service';
import { BudgetChangeController } from './budget-change.controller';

@Module({
  controllers: [BudgetChangeController],
  providers: [BudgetChangeService]
})
export class BudgetChangeModule {}
