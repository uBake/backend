import { Module } from '@nestjs/common';
import { BakerService } from './baker.service';
import { BakerController } from './baker.controller';

@Module({
  controllers: [BakerController],
  providers: [BakerService]
})
export class BakerModule {}
