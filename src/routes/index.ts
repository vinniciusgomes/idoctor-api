import { Router } from 'express';

import clinicsRouter from './clinics.routes';
import usersRouter from './users.routes';
import incomesRouter from './incomes.routes';
import expensesRouter from './expenses.routes';

const routes = Router();

routes.use('/clinics', clinicsRouter);
routes.use('/users', usersRouter);
routes.use('/incomes', incomesRouter);
routes.use('/expenses', expensesRouter);

export default routes;
