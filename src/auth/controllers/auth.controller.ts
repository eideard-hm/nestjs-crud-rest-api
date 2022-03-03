import { Controller, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @Post('signup')
  sigUp() {
    return this._authService.signUp();
  }

  @Post('signin')
  signIn() {
    return this._authService.signIn();
  }
}
