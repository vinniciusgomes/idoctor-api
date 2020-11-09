import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Patient from '../models/Patient';

interface Response {
  numberOfPatients: Number;
  patientsPerPage: Number;
  numberOfPages: number;
}

class CountPatientListService {
  public async execute(): Promise<Response> {
    const patientRepository = getRepository(Patient);

    try {
      const numberOfPatients = await patientRepository.count();

      const numberOfPages = Math.ceil(numberOfPatients / 10);

      return { numberOfPatients, patientsPerPage: 10, numberOfPages };
    } catch {
      throw new AppError('Error on get count of patients', 500);
    }
  }
}

export default CountPatientListService;
