import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { login, password } = request.body;

  const authenticateUser = new AuthenticateUserService();

  const { user, token, doctor } = await authenticateUser.execute({
    login,
    password,
  });

  user.password = '';

  return response.json({ user, token, doctor });
});

export default sessionsRouter;
