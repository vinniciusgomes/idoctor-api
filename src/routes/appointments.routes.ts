import { Router } from 'express';

import CreateAppointmentService from '../services/CreateAppointmentService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import ListAppointmentsService from '../services/ListAppointmentsService';

const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticated);

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

appointmentsRouter.get('/', async (request, response) => {
  const { date } = request.query;

  const listAppointments = new ListAppointmentsService();

  const parsedDate = date?.toString();
  const appointmentList = await listAppointments.execute({
    date: parsedDate,
  });

  return response.json(appointmentList);
});

export default appointmentsRouter;
