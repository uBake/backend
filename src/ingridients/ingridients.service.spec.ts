import { Test, TestingModule } from '@nestjs/testing';
import { IngridientsService } from './ingridients.service';

describe('IngridientsService', () => {
  let service: IngridientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IngridientsService],
    }).compile();

    service = module.get<IngridientsService>(IngridientsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
