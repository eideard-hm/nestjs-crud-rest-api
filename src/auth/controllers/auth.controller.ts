import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @Post('signup')
  sigUp(): string {
    return 'I am signup';
  }

  @Post('signin')
  signIn(): string {
    return 'I am signin';
  }
}
