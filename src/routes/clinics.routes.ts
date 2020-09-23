import { Router } from 'express';

import CreateClinicService from '../services/CreateClinicService';

const clinicsRouter = Router();

clinicsRouter.post('/', async (request, response) => {
  const {
    name,
    zip_code,
    address,
    neighborhood,
    address_number,
    city,
    fu,
    phone,
    email,
  } = request.body;

  const createClinic = new CreateClinicService();

  const clinic = await createClinic.execute({
    name,
    zip_code,
    address,
    neighborhood,
    address_number,
    city,
    fu,
    phone,
    email,
  });

  if (!clinic) {
    return response
      .status(500)
      .json({ error: 'An error occurred while creating clinic' });
  }

  return response.json(clinic);
});

export default clinicsRouter;
