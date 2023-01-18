import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IngridientService } from './ingridient.service';
import { CreateIngridientDto } from './dto/create-ingridient.dto';
import { UpdateIngridientDto } from './dto/update-ingridient.dto';

@Controller('ingridient')
export class IngridientController {
  constructor(private readonly ingridientService: IngridientService) {}

  @Post()
  create(@Body() createIngridientDto: CreateIngridientDto) {
    return this.ingridientService.create(createIngridientDto);
  }

  @Get()
  findAll() {
    return this.ingridientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ingridientService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIngridientDto: UpdateIngridientDto) {
    return this.ingridientService.update(+id, updateIngridientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingridientService.remove(+id);
  }
}
