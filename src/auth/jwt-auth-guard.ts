import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    try {
      const authHeader = request.headers.authorization.split(' ');
      const bearer = authHeader[0];
      const token = authHeader[1];
      if (bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException({ message: 'User is not authorized' });
      }
      const user = this.jwtService.verify(token);
      request.user = user;
      return true;
    } catch (e) {
      console.log(e);

      throw new UnauthorizedException({ message: 'User is not authorized' });
    }
  }
}
