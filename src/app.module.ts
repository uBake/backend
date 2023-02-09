import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { BakeryModule } from './bakery/bakery.module';
import { BudgetChangeModule } from './budget-change/budget-change.module';
import { BudgetModule } from './budget/budget.module';
import { EventModule } from './event/event.module';
import { IngridientModule } from './ingridient/ingridient.module';
import { OrderTypeModule } from './order-type/order-type.module';
import { OrderModule } from './order/order.module';
import { Role } from './role/role.model';
import { RoleModule } from './role/role.module';
import { UserRoles } from './role/user-roles.model';
import { TimeslotModule } from './timeslot/timeslot.module';
import { User } from './user/user.model';
import { UsersModule } from './user/user.module';
import { WarehouseModule } from './warehouse/warehouse.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Role, UserRoles],
      autoLoadModels: true,
    }),
    OrderModule,
    OrderTypeModule,
    IngridientModule,
    EventModule,
    BakeryModule,
    TimeslotModule,
    WarehouseModule,
    BudgetModule,
    BudgetChangeModule,
    UsersModule,
    RoleModule,
  ],
})
export class AppModule {}
