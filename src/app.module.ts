import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { UserModule } from './user/user.module';
import { OrderTypeModule } from './order-type/order-type.module';
import { IngridientsController } from './ingridients/ingridients.controller';
import { IngridientsModule } from './ingridients/ingridients.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [OrderModule, IngridientsModule, OrderTypeModule, UserModule],
  controllers: [AppController, IngridientsController],
  providers: [AppService],
})
export class AppModule {}
