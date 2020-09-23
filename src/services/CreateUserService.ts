import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../models/User';

interface Request {
  name: string;
  login: string;
  password: string;
  clinic_id: string;
}

class CreateUserService {
  public async execute({
    name,
    login,
    password,
    clinic_id,
  }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const hashedPassword = await hash(password, 8);

    const user = userRepository.create({
      name,
      login,
      password: hashedPassword,
      clinic_id,
    });

    await userRepository.save(user);

    return user;
  }
}

export default CreateUserService;
