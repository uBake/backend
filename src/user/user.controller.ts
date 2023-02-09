import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from './../auth/roles-auth.decorator';
import { RolesGuard } from './../auth/roles.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.model';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    summary: 'Create user',
    description: 'Create user with name, email, phone, nickname and password',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/CreateUserDto',
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    type: User,
  })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @ApiOperation({
    summary: 'Get all users',
    description: 'Get list of all users',
  })
  @ApiResponse({
    status: 200,
    type: [User],
  })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get()
  findAll() {
    return this.userService.findAll();
  }
}
