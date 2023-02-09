import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RoleModule } from 'src/role/role.module';
import { Role } from '../role/role.model';
import { UserRoles } from '../role/user-roles.model';
import { UserController } from './user.controller';
import { User } from './user.model';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [SequelizeModule.forFeature([User, Role, UserRoles]), RoleModule],
})
export class UsersModule {}
