import { Test, TestingModule } from '@nestjs/testing';
import { BudgetChangeController } from './budget-change.controller';
import { BudgetChangeService } from './budget-change.service';

describe('BudgetChangeController', () => {
  let controller: BudgetChangeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BudgetChangeController],
      providers: [BudgetChangeService],
    }).compile();

    controller = module.get<BudgetChangeController>(BudgetChangeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
