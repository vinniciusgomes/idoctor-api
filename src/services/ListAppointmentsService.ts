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
          'appointment.date || appointment.start_time AS appointment.date',
          'appointment.status',
          'appointment.type',
          'appointment.start_time',
          'patient.name',
          'patient.id',
          'patient.email',
          'patient.phone',
          'patient.avatar',
          'doctor.speciality',
          'doctor.id',
          'user.name',
          'patient_appointments.id',
          'patient_appointments.type',
          'patient_appointments.status',
        ])
        .leftJoin('appointment.patient', 'patient')
        .leftJoin(
          'patient.appointments',
          'patient_appointments',
          'patient_appointments.status  = :status',
          {
            status: 4,
          },
        )
        .leftJoin('appointment.doctor', 'doctor')
        .innerJoin('doctor.user', 'user')
        .where('appointment.date = :date', { date })
        .andWhere('appointment.status NOT IN (:canceled, :finished)', {
          canceled: 3,
          finished: 4,
        })
        .orderBy('appointment.start_time', 'ASC')
        .limit(Number(limit))
        .getMany();

      return appointmentList;
    } catch {
      throw new AppError('Erro on get patients list', 500);
    }
  }
}

export default ListAppointmentsService;
