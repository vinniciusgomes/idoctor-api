import { getRepository } from 'typeorm';

import Income from '../models/Income';

interface Request {
  description: string;
  value: Number;
  status: Number;
  deadline: Date;
  receipt_date: Date;
  user_id: string;
  clinic_id: string;
}

class CreateIncomeService {
  public async execute({
    description,
    value,
    status,
    deadline,
    receipt_date,
    user_id,
    clinic_id,
  }: Request): Promise<Income> {
    const incomeRepository = getRepository(Income);

    const income = incomeRepository.create({
      description,
      value,
      status,
      deadline,
      receipt_date,
      user_id,
      clinic_id,
    });

    await incomeRepository.save(income);

    return income;
  }
}

export default CreateIncomeService;
