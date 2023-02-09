import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './role.model';

@Injectable()
export class RoleService {
  constructor(
    @InjectModel(Role) private readonly roleRepository: typeof Role,
  ) {}

  async create(createDto: CreateRoleDto) {
    const role = await this.roleRepository.create(createDto);
    return role;
  }

  findAll() {
    return `This action returns all roles`;
  }

  async findOneByValue(value: string) {
    const role = await this.roleRepository.findOne({ where: { value } });
    return role;
  }

  update(id: number, updateDto: UpdateRoleDto) {
    return `This action updates a #${id} role with ${updateDto}`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
