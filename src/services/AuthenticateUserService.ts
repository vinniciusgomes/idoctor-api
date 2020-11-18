import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth';

import User from '../models/User';
import AppError from '../errors/AppError';
import Doctor from '../models/Doctor';

interface Request {
  login: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
  doctor: Doctor | undefined;
}

class AuthenticateUserService {
  public async execute({ login, password }: Request): Promise<Response> {
    const userReository = getRepository(User);
    const doctorReository = getRepository(Doctor);

    const user = await userReository.findOne({ where: { login } });

    if (!user) {
      throw new AppError('Invalid login/password combination', 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError('Invalid login/password combination', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({ type: user.type, clinic: user.clinic_id }, secret, {
      subject: user.id,
      expiresIn: expiresIn,
    });

    const doctor = await doctorReository.findOne({
      where: { user_id: user.id },
    });

    return {
      user,
      token,
      doctor,
    };
  }
}

export default AuthenticateUserService;
