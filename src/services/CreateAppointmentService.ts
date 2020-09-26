import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Appointment from '../models/Appointment';

interface Request {
  date: Date;
  start_time: Date;
  status: Number;
  type: Number;
  doctor_id: string;
  patient_id: string;
  clinic_id: string;
}

class CreateAppointmentService {
  public async execute({
    date,
    start_time,
    status,
    type,
    doctor_id,
    patient_id,
    clinic_id,
  }: Request): Promise<Appointment> {
    const appointmentRepository = getRepository(Appointment);

    const appointment = appointmentRepository.create({
      date,
      start_time,
      status,
      type,
      doctor_id,
      patient_id,
      clinic_id,
    });

    try {
      await appointmentRepository.save(appointment);
      return appointment;
    } catch (error) {
      throw new AppError('Error on save the appointmet', 500);
    }
  }
}

export default CreateAppointmentService;
