import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from '../auth/auth.module';
import { Role } from '../role/role.model';
import { RoleModule } from '../role/role.module';
import { UserRoles } from '../role/user-roles.model';
import { UserController } from './user.controller';
import { User } from './user.model';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles]),
    RoleModule,
    forwardRef(() => AuthModule),
  ],
  exports: [UserService],
})
export class UsersModule {}
