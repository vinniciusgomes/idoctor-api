import { getRepository } from 'typeorm';

import Expense from '../models/Expense';

interface Request {
  description: string;
  value: Number;
  status: Number;
  due_date: Date;
  payday: Date;
  user_id: string;
  clinic_id: string;
}

class CreateExpenseService {
  public async execute({
    description,
    value,
    status,
    due_date,
    payday,
    user_id,
    clinic_id,
  }: Request): Promise<Expense> {
    const expenseRepository = getRepository(Expense);

    const expense = expenseRepository.create({
      description,
      value,
      status,
      due_date,
      payday,
      user_id,
      clinic_id,
    });

    await expenseRepository.save(expense);

    return expense;
  }
}

export default CreateExpenseService;
