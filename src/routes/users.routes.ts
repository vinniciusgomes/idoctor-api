import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';
import CreateDoctorService from '../services/CreateDoctorService';

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

    const doctor = createDoctor.execute({
      speciality,
      start_time,
      end_time,
      user_id: user.id,
    });

    return response.json({ user, doctor });
  }

  return response.json(user);
});

export default usersRouter;
