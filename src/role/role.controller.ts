import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './role.model';
import { RoleService } from './role.service';

@ApiTags('Roles')
@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @ApiOperation({
    summary: 'Create Role',
    description: 'Create Role value and description',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/CreateRoleDto',
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    type: Role,
  })
  @Post()
  create(@Body() createDto: CreateRoleDto) {
    return this.roleService.create(createDto);
  }

  @ApiOperation({
    summary: 'Get all Roles',
    description: 'Get list of all Roles',
  })
  @ApiResponse({
    status: 200,
    type: [Role],
  })
  @Get()
  findAll() {
    return this.roleService.findAll();
  }

  @ApiOperation({
    summary: 'Get role',
    description: 'Get role by it value',
  })
  @ApiResponse({
    status: 200,
    type: Role,
  })
  @Get(':value')
  findOneByValue(@Param('value') value: string) {
    return this.roleService.findOneByValue(value);
  }
}
