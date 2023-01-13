import { Module } from '@nestjs/common';
import { IngridientsService } from './ingridients.service';
import { IngridientsController } from './ingridients.controller';

@Module({
  controllers: [IngridientsController],
  providers: [IngridientsService]
})
export class IngridientsModule {}
