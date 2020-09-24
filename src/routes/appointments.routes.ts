import { Router } from 'express';

import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRouter = Router();

appointmentsRouter.post('/', async (request, response) => {
  const {
    date,
    start_time,
    status,
    type,
    doctor_id,
    patient_id,
    clinic_id,
  } = request.body;

  const createAppointment = new CreateAppointmentService();

  const appointment = await createAppointment.execute({
    date,
    start_time,
    status,
    type,
    doctor_id,
    patient_id,
    clinic_id,
  });

  if (!appointment) {
    return response
      .status(500)
      .json({ error: 'An error occurred while creating appointment' });
  }

  return response.json(appointment);
});

export default appointmentsRouter;
