import { getRepository } from 'typeorm';

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

    await appointmentRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;