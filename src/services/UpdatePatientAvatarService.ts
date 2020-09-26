import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';
import uploadConfig from '../config/upload';
import Patient from '../models/Patient';
import AppError from '../errors/AppError';

interface Request {
  patient_id: string;
  filename: string;
}

class UpdatePatientAvatar {
  public async execute({ patient_id, filename }: Request): Promise<Patient> {
    const patientRepository = getRepository(Patient);

    const patient = await patientRepository.findOne(patient_id);

    if (!patient) {
      throw new AppError('This patient does not exist', 401);
    }

    if (patient.avatar) {
      const avatarFilePath = path.join(uploadConfig.directory, patient.avatar);
      const fileExist = await fs.promises.stat(avatarFilePath);

      if (fileExist) {
        await fs.promises.unlink(avatarFilePath);
      }
    }

    patient.avatar = filename;

    try {
      await patientRepository.save(patient);

      return patient;
    } catch {
      throw new AppError('Error on save patient avatar', 500);
    }
  }
}

export default UpdatePatientAvatar;
