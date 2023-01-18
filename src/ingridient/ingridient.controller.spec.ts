import { Test, TestingModule } from '@nestjs/testing';
import { IngridientController } from './ingridient.controller';
import { IngridientService } from './ingridient.service';

describe('IngridientController', () => {
  let controller: IngridientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IngridientController],
      providers: [IngridientService],
    }).compile();

    controller = module.get<IngridientController>(IngridientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
