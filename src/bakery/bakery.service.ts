import { Injectable } from '@nestjs/common';
import { CreateBakeryDto } from './dto/create-bakery.dto';
import { UpdateBakeryDto } from './dto/update-bakery.dto';

@Injectable()
export class BakeryService {
  create(createBakeryDto: CreateBakeryDto) {
    return 'This action adds a new bakery';
  }

  findAll() {
    return `This action returns all bakery`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bakery`;
  }

  update(id: number, updateBakeryDto: UpdateBakeryDto) {
    return `This action updates a #${id} bakery`;
  }

  remove(id: number) {
    return `This action removes a #${id} bakery`;
  }
}
