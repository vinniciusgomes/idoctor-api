import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Patient from '../models/Patient';

interface Request {
  ssn: string;
}

class ListSpecificPatientByDocumentService {
  public async execute({ ssn }: Request): Promise<Patient | undefined> {
    const patientRepository = getRepository(Patient);

    try {
      const patient = await patientRepository.findOne(ssn);

      if (patient) {
        return patient;
      }
    } catch {
      throw new AppError('Erro on get patients list', 500);
    }
  }
}

export default ListSpecificPatientByDocumentService;
