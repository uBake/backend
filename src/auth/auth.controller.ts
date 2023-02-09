import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { AuthService } from './auth.service';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({
    summary: 'Log in',
    description: 'Log user in with email and password',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/ValidateUserDto',
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    type: '',
  })
  @Post('/login')
  login(@Body() userDto: CreateUserDto) {
    return this.authService.login(userDto);
  }

  @ApiOperation({
    summary: 'Sign in',
    description: 'Sign user in with email, name and password',
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
    status: 200,
    type: '',
  })
  @Post('/registration')
  registration(@Body() userDto: CreateUserDto) {
    return this.authService.registration(userDto);
  }
}
