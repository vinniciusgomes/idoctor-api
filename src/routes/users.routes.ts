import { response, Router } from 'express';
import multer from 'multer';
import CreateUserService from '../services/CreateUserService';
import CreateDoctorService from '../services/CreateDoctorService';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

import uploadConfig from '../config/upload';
import ListDoctorsService from '../services/ListDoctorsService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const upload = multer(uploadConfig);

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  const { name, login, password, type, clinic_id } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    name,
    login,
    password,
    type,
    clinic_id,
  });

  if (!user) {
    return response
      .status(500)
      .json({ error: 'An error occurred while creating user' });
  }

  delete user.password;

  if (type == 2) {
    const { speciality, start_time, end_time } = request.body;

    const createDoctor = new CreateDoctorService();

    const doctor = await createDoctor.execute({
      speciality,
      start_time,
      end_time,
      user_id: user.id,
    });

    delete doctor.user;

    return response.json({ user, doctor });
  }

  return response.json(user);
});

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response) => {
    const { user_id } = request.body;

    const updateAvatar = new UpdateUserAvatarService();

    const user = await updateAvatar.execute({
      user_id,
      filename: request.file.filename,
    });

    delete user.password;

    return response.json(user);
  },
);

usersRouter.get('/doctors', ensureAuthenticated, async (request, response) => {
  const listDoctor = new ListDoctorsService();

  const doctorList = await listDoctor.execute();

  return response.json(doctorList);
});

export default usersRouter;
