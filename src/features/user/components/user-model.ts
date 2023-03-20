import { APIstatus } from '../../../shared/api-status';

export interface User {
  email: string;
  password: string;
}

export interface UserToken {
  accessToken: string;
  msg: string;
}

export interface UserStatus {
  status: APIstatus;
  loginStatus: 'idle' | 'success' | 'error' | 'loadind';
  loginMessage: string | undefined;
}

export type AuthUser = Pick<User, 'email' | 'password'>;
