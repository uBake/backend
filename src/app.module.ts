import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { BudgetModule } from './budget/budget.module';
import { WarehouseModule } from './warehouse/warehouse.module';
import { TimeslotModule } from './timeslot/timeslot.module';
import { BakeryModule } from './bakery/bakery.module';
import { EventModule } from './event/event.module';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';
import { BakerModule } from './baker/baker.module';
import { IngridientModule } from './ingridient/ingridient.module';
import { UserModule } from './user/user.module';
import { OrderTypeModule } from './order-type/order-type.module';
import { IngridientsController } from './ingridients/ingridients.controller';
import { IngridientsModule } from './ingridients/ingridients.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [OrderModule, IngridientsModule, OrderTypeModule, UserModule, IngridientModule, BakerModule, ClientModule, AdminModule, EventModule, BakeryModule, TimeslotModule, WarehouseModule, BudgetModule],
  controllers: [AppController, IngridientsController],
  providers: [AppService],
})
export class AppModule {}
