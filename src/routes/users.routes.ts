import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  const { name, login, password, clinic_id } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    name,
    login,
    password,
    clinic_id,
  });

  if (!user) {
    return response
      .status(500)
      .json({ error: 'An error occurred while creating user' });
  }

  delete user.password;

  return response.json(user);
});

export default usersRouter;
