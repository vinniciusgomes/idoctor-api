import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import User from '../models/User';

interface Request {
  login: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public async execute({ login, password }: Request): Promise<Response> {
    const userReository = getRepository(User);

    const user = await userReository.findOne({ where: { login } });

    if (!user) {
      throw new Error('Invalid login/password combination');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error('Invalid login/password combination');
    }

    const token = sign(
      { type: user.type },
      '39e0169965ecdd9534338dcf0e8aab01',
      {
        subject: user.id,
        expiresIn: '1d',
      },
    );

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
