import { Equal, getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Appointment from '../models/Appointment';

interface Request {
  month: Number | undefined;
  year: Number | undefined;
  doctor: string;
  limit: Number;
}

class ListAppointmentsInMonthByDoctorService {
  public async execute({
    month,
    year,
    doctor,
    limit,
  }: Request): Promise<Appointment[]> {
    const appointmentRepository = getRepository(Appointment);

    try {
      const appointmentList = await appointmentRepository
        .createQueryBuilder('appointment')
        .select([
          'appointment.id',
          'appointment.date',
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
        ])
        .leftJoin('appointment.patient', 'patient')
        .leftJoin('appointment.doctor', 'doctor')
        .innerJoin('doctor.user', 'user')
        .where('EXTRACT(MONTH FROM appointment.date) = :month', { month })
        .andWhere('EXTRACT(YEAR FROM appointment.date) = :year', { year })
        .andWhere('doctor.id = :doctor', { doctor })
        .orderBy('appointment.date', 'ASC')
        .addOrderBy('appointment.start_time', 'ASC')
        .limit(Number(limit))
        .getMany();

      return appointmentList;
    } catch {
      throw new AppError('Erro on get patients list', 500);
    }
  }
}

export default ListAppointmentsInMonthByDoctorService;
