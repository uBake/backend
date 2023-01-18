import { Test, TestingModule } from '@nestjs/testing';
import { BakerController } from './baker.controller';
import { BakerService } from './baker.service';

describe('BakerController', () => {
  let controller: BakerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BakerController],
      providers: [BakerService],
    }).compile();

    controller = module.get<BakerController>(BakerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
