import { Test, TestingModule } from '@nestjs/testing';
import { BakerService } from './baker.service';

describe('BakerService', () => {
  let service: BakerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BakerService],
    }).compile();

    service = module.get<BakerService>(BakerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
