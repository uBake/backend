import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Role } from 'src/role/role.model';
import { UserRoles } from 'src/role/user-roles.model';

interface UserCreationAttrs {
  name: string;
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
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

  @ApiProperty({
    example: 'nickname',
    description: 'Unique nickname',
  })
  @Column({
    type: DataType.STRING,
    primaryKey: true,
    unique: true,
    allowNull: false,
  })
  nickname: string;

  @ApiProperty({
    example: '3329250464',
    description: 'Unique phone',
  })
  @Column({
    type: DataType.STRING,
    primaryKey: true,
    unique: true,
    allowNull: false,
  })
  phone: string;

  @ApiProperty({
    example: 'Name Surname',
    description: 'User name',
  })
  @Column({
    type: DataType.STRING,
    primaryKey: true,
    allowNull: false,
  })
  name: string;

  @ApiProperty({
    example: 'email@test.com',
    description: 'Unique email',
  })
  @Column({
    type: DataType.STRING,
    primaryKey: true,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({
    example: 'password',
    description: 'User password',
  })
  @Column({
    type: DataType.STRING,
    primaryKey: true,
    allowNull: false,
  })
  password: string;

  @ApiProperty({
    example: false,
    description: 'Is user logged in on some device',
  })
  @Column({
    type: DataType.BOOLEAN,
    primaryKey: true,
    allowNull: false,
    defaultValue: false,
  })
  isLoggedIn: boolean;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}