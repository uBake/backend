import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'secret',
      signOptions: {
        expiresIn: '24h',
      },
    }),
    forwardRef(() => UsersModule),
  ],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
