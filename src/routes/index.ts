import { Router } from 'express';

import clinicsRouter from './clinics.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/clinics', clinicsRouter);
routes.use('/users', usersRouter);

export default routes;
