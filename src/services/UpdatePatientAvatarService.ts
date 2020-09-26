import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';
import uploadConfig from '../config/upload';
import Patient from '../models/Patient';

interface Request {
  patient_id: string;
  filename: string;
}

class UpdatePatientAvatar {
  public async execute({ patient_id, filename }: Request): Promise<Patient> {
    const patientRepository = getRepository(Patient);

    const patient = await patientRepository.findOne(patient_id);

    if (!patient) {
      throw new Error('This patient does not exist');
    }

    if (patient.avatar) {
      const avatarFilePath = path.join(uploadConfig.directory, patient.avatar);
      const fileExist = await fs.promises.stat(avatarFilePath);

      if (fileExist) {
        await fs.promises.unlink(avatarFilePath);
      }
    }

    patient.avatar = filename;

    await patientRepository.save(patient);

    return patient;
  }
}

export default UpdatePatientAvatar;
