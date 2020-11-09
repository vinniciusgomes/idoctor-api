import { Router } from 'express';

import CreateIncomeService from '../services/CreateIncomeService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const incomesRouter = Router();

incomesRouter.use(ensureAuthenticated);

incomesRouter.post('/', async (request, response) => {
  const {
    description,
    value,
    status,
    deadline,
    receipt_date,
    user_id,
    clinic_id,
  } = request.body;

  const createIncome = new CreateIncomeService();

  const income = await createIncome.execute({
    description,
    value,
    status,
    deadline,
    receipt_date,
    user_id,
    clinic_id,
  });

  if (!income) {
    return response
      .status(500)
      .json({ error: 'An error occurred while creating income' });
  }

  return response.json(income);
});

export default incomesRouter;
