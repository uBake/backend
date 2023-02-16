import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcryptjs';
import { ROLES_KEY } from '../auth/roles-auth.decorator';
import { RoleService } from '../role/role.service';
import { ROLE_USER } from './const';
import { AddRoleDto } from './dto/add-role-dto';
import { BanUserDto } from './dto/ban-user-dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private readonly userRepository: typeof User,
    private readonly roleService: RoleService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const nickname = await bcrypt.hash(
        createUserDto.email,
        Number(process.env.SALT_ROUNDS) || 5,
      );
      const password = await bcrypt.hash(createUserDto.password, 5);
      const user = await this.userRepository.create({
        ...createUserDto,
        nickname,
        password,
        phone: '00000000000',
      });
      const role = await this.roleService.findOneByValue(ROLE_USER);
      await user.$set(ROLES_KEY, [role.id]);
      user.roles = [role];
      return user;
    } catch (e) {
      console.log(e);
    }
  }

  async findAll() {
    const users = await this.userRepository.findAll({ include: { all: true } });
    return users;
  }

  async findOneByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: {
        email,
      },
      include: { all: true },
    });
    return user;
  }

  async addRole(dto: AddRoleDto) {
    const user = await this.userRepository.findByPk(dto.userId, {
      include: { all: true },
    });
    const role = await this.roleService.findOneByValue(dto.value);
    if (user && role) {
      if (!user.roles.some((r) => r.value === role.value)) {
        await user.$add(ROLES_KEY, role.id);
        return dto;
      }
      throw new HttpException(
        'User already has this role',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    throw new HttpException('User or role not found', HttpStatus.NOT_FOUND);
  }

  async ban(dto: BanUserDto) {
    try {
      const user = await this.userRepository.findByPk(dto.userId);
      if (!user) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
      user.isBanned = true;
      user.banReason = dto.banReason;
      await user.save();
      return user;
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
