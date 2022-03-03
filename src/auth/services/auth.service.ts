import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signIn() {
    return { msg: 'Hello since Service signIn' };
  }

  signUp() {
    return { msg: 'Hello since Service signUp' };
  }
}
