import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcryptjs';
import { ROLES_KEY } from '../auth/roles-auth.decorator';
import { RoleService } from '../role/role.service';
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
      const nickname = await bcrypt.hash(createUserDto.email, 5);
      const user = await this.userRepository.create({
        ...createUserDto,
        nickname,
        phone: '00000000000',
      });
      const role = await this.roleService.findOneByValue('USER');
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
}
