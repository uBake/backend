import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BakerService } from './baker.service';
import { CreateBakerDto } from './dto/create-baker.dto';
import { UpdateBakerDto } from './dto/update-baker.dto';

@Controller('baker')
export class BakerController {
  constructor(private readonly bakerService: BakerService) {}

  @Post()
  create(@Body() createBakerDto: CreateBakerDto) {
    return this.bakerService.create(createBakerDto);
  }

  @Get()
  findAll() {
    return this.bakerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bakerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBakerDto: UpdateBakerDto) {
    return this.bakerService.update(+id, updateBakerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bakerService.remove(+id);
  }
}
