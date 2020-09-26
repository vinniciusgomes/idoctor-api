import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

import CreatePatientService from '../services/CreatePatientService';
import UpdatePatientAvatar from '../services/UpdatePatientAvatarService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const upload = multer(uploadConfig);

const patientsRouter = Router();

patientsRouter.use(ensureAuthenticated);

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

patientsRouter.patch(
  '/avatar',
  upload.single('avatar'),
  async (request, response) => {
    try {
      const { patient_id } = request.body;
      const updateAvatar = new UpdatePatientAvatar();

      const patient = await updateAvatar.execute({
        patient_id,
        filename: request.file.filename,
      });

      return response.json(patient);
    } catch (error) {
      return response.status(500).json({ error });
    }
  },
);

export default patientsRouter;
