import { Router } from 'express';

import CreatePatientService from '../services/CreatePatientService';

const patientsRouter = Router();

patientsRouter.post('/', async (request, response) => {
  const {
    name,
    email,
    phone,
    date_of_birth,
    gender,
    skin_color,
    naturalness,
    marital_status,
    ssn,
    degree_of_instuction,
    profession,
    health_insurance,
    zip_code,
    address,
    complement,
    address_number,
    neighborhood,
    city,
    fu,
    medical_record,
    clinic_id,
  } = request.body;

  const createPatient = new CreatePatientService();

  const patient = await createPatient.execute({
    name,
    email,
    phone,
    date_of_birth,
    gender,
    skin_color,
    naturalness,
    marital_status,
    ssn,
    degree_of_instuction,
    profession,
    health_insurance,
    zip_code,
    address,
    complement,
    address_number,
    neighborhood,
    city,
    fu,
    medical_record,
    clinic_id,
  });

  if (!patient) {
    return response
      .status(500)
      .json({ error: 'An error occurred while creating patient' });
  }

  return response.json(patient);
});

export default patientsRouter;
