import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import MedicalRecord from '../models/MedicalRecord';

interface Request {
  patient_id: string;
  record: string;
  date: string;
  doctor_id: string;
}

class SaveMedicalReportService {
  public async execute({ patient_id, record, date, doctor_id }: Request) {
    const medicalRecordRepository = getRepository(MedicalRecord);

    const medicalRecord = medicalRecordRepository.create({
      patient_id,
      record,
      date,
      doctor_id,
    });

    try {
      await medicalRecordRepository.save(medicalRecord);

      return medicalRecord;
    } catch (error) {
      throw new AppError('Error on save Medical Record', 500);
    }
  }
}

export default SaveMedicalReportService;
