import { Equal, getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Appointment from '../models/Appointment';

interface Request {
  id: string;
}

class ListSpecificAppointmentService {
  public async execute({ id }: Request): Promise<Appointment | Array<null>> {
    const appointmentRepository = getRepository(Appointment);

    try {
      const appointment = await appointmentRepository
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
        .where('appointment.id = :id', { id })
        .innerJoin('doctor.user', 'user')
        .getOne();

      if (appointment) {
        return appointment;
      } else {
        return [];
      }
    } catch {
      throw new AppError('Erro on get patients list', 500);
    }
  }
}

export default ListSpecificAppointmentService;
