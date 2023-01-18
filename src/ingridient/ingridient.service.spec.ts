import { Test, TestingModule } from '@nestjs/testing';
import { IngridientService } from './ingridient.service';

describe('IngridientService', () => {
  let service: IngridientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IngridientService],
    }).compile();

    service = module.get<IngridientService>(IngridientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
