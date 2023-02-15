import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ROLE_ADMIN } from '../user/const';
import { User } from '../user/user.model';
import { Role } from './role.model';

@Table({ tableName: 'userRoles', createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {
  @ApiProperty({
    example: '1',
    description: 'Unique identifier',
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  })
  id: number;

  @ForeignKey(() => User)
  @ApiProperty({
    example: ROLE_ADMIN,
    description: 'Unique user role',
  })
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;

  @ForeignKey(() => Role)
  @ApiProperty({
    example: 'Administrator',
    description: 'User role description',
  })
  @Column({
    type: DataType.INTEGER,
  })
  roleId: number;
}
