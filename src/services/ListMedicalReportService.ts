import { getRepository } from 'typeorm';
import { format } from 'date-fns';
import AppError from '../errors/AppError';
import MedicalRecord from '../models/MedicalRecord';

interface Request {
  id: string;
}

class ListMedicalReportService {
  public async execute({ id }: Request): Promise<String> {
    const medicalRecordRepository = getRepository(MedicalRecord);

    try {
      const medicalRecord = await medicalRecordRepository
        .createQueryBuilder('medical_records')
        .select([
          'medical_records.id',
          'medical_records.date',
          'medical_records.record',
          'patient.name',
          'doctor.speciality',
          'user.name',
        ])
        .leftJoin('medical_records.patient', 'patient')
        .leftJoin('medical_records.doctor', 'doctor')
        .where('medical_records.patient_id = :id', { id })
        .innerJoin('doctor.user', 'user')
        .orderBy('medical_records.date')
        .getMany();

      if (medicalRecord) {
        let recordInString = '';

        medicalRecord.map(record => {
          recordInString += `${record.doctor.speciality}\n${
            record.doctor.user.name
          } - ${format(record.date, 'dd/MM/yyyy')}:\n${record.record}\n\n`;
        });

        return recordInString;
      } else {
        return '';
      }
    } catch {
      throw new AppError('Erro on get medical record list', 500);
    }
  }
}

export default ListMedicalReportService;
