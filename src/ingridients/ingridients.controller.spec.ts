import { Test, TestingModule } from '@nestjs/testing';
import { IngridientsController } from './ingridients.controller';
import { IngridientsService } from './ingridients.service';

describe('IngridientsController', () => {
  let controller: IngridientsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IngridientsController],
      providers: [IngridientsService],
    }).compile();

    controller = module.get<IngridientsController>(IngridientsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
