import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';
import uploadConfig from '../config/upload';
import User from '../models/User';

interface Request {
  user_id: string;
  filename: string;
}

class UpdateUserAvatar {
  public async execute({ user_id, filename }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne(user_id);

    if (!user) {
      throw new Error('this user not exist');
    }

    if (user.avatar) {
      const avatarFilePath = path.join(uploadConfig.directory, user.avatar);
      const fileExist = fs.promises.stat(avatarFilePath);

      if (fileExist) {
        await fs.promises.unlink(avatarFilePath);
      }
    }

    user.avatar = filename;

    await userRepository.save(user);

    return user;
  }
}

export default UpdateUserAvatar;
