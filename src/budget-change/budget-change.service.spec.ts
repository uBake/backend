import { Test, TestingModule } from '@nestjs/testing';
import { BudgetChangeService } from './budget-change.service';

describe('BudgetChangeService', () => {
  let service: BudgetChangeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BudgetChangeService],
    }).compile();

    service = module.get<BudgetChangeService>(BudgetChangeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
