import { Equal, getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Appointment from '../models/Appointment';

interface Request {
  date: string | undefined;
  limit: Number;
}

class ListAppointmentsService {
  public async execute({ date, limit }: Request): Promise<Appointment[]> {
    const appointmentRepository = getRepository(Appointment);

    try {
      const appointmentList = await appointmentRepository
        .createQueryBuilder('appointment')
        .select([
          'appointment.id',
          'appointment.date',
          'appointment.status',
          'appointment.start_time',
          'patient.name',
          'patient.id',
          'patient.email',
          'patient.phone',
          'doctor.speciality',
          'doctor.id',
          'user.name',
        ])
        .leftJoin('appointment.patient', 'patient')
        .leftJoin('appointment.doctor', 'doctor')
        .innerJoin('doctor.user', 'user')
        .where('appointment.date = :date', { date })
        .limit(Number(limit))
        .getMany();

      return appointmentList;
    } catch {
      throw new AppError('Erro on get patients list', 500);
    }
  }
}

export default ListAppointmentsService;
