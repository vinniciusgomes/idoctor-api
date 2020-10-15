import { Router } from 'express';

import CreateAppointmentService from '../services/CreateAppointmentService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import ListAppointmentsService from '../services/ListAppointmentsService';
import ListSpecificAppointmentService from '../services/ListSpecificAppointmentService';
import ListAppointmentsInMonthService from '../services/ListAppointmentsInMonthService';
import ListAppointmentsByDoctorService from '../services/ListAppointmentsByDoctorService';

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

  let limit;

  if (!request.query.limit) {
    limit = 5;
  } else {
    limit = Number(request.query.limit);
  }

  const listAppointments = new ListAppointmentsService();

  const parsedDate = date?.toString();
  const appointmentList = await listAppointments.execute({
    date: parsedDate,
    limit,
  });

  return response.json(appointmentList);
});

appointmentsRouter.get('/doctor/:doctor', async (request, response) => {
  const { date } = request.query;
  const { doctor } = request.params;

  let limit;

  if (!request.query.limit) {
    limit = 5;
  } else {
    limit = Number(request.query.limit);
  }

  const listAppointments = new ListAppointmentsByDoctorService();

  const parsedDate = date?.toString();
  const appointmentList = await listAppointments.execute({
    date: parsedDate,
    doctor,
    limit,
  });

  return response.json(appointmentList);
});

appointmentsRouter.get('/month', async (request, response) => {
  const { month, year } = request.query;

  let limit;

  if (!request.query.limit) {
    limit = 5;
  } else {
    limit = Number(request.query.limit);
  }

  const listAppointments = new ListAppointmentsInMonthService();

  const parsedMonth = Number(month);
  const parsedYear = Number(year);

  const appointmentList = await listAppointments.execute({
    month: parsedMonth,
    year: parsedYear,
    limit,
  });

  return response.json(appointmentList);
});

appointmentsRouter.get('/:id', async (request, response) => {
  const { id } = request.params;

  const listAppointment = new ListSpecificAppointmentService();

  const appointment = await listAppointment.execute({ id });

  return response.json(appointment);
});

export default appointmentsRouter;
