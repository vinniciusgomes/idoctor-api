import { response, Router } from 'express';

import CreateExpenseService from '../services/CreateExpenseService';

const expensesRouter = Router();

expensesRouter.post('/', async (request, response) => {
  const {
    description,
    value,
    status,
    due_date,
    payday,
    user_id,
    clinic_id,
  } = request.body;

  const createExpense = new CreateExpenseService();

  const expense = await createExpense.execute({
    description,
    value,
    status,
    due_date,
    payday,
    user_id,
    clinic_id,
  });

  if (!expense) {
    return response
      .status(500)
      .json({ error: 'An error occurred while creating expense' });
  }

  return response.json(expense);
});

export default expensesRouter;
