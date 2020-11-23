import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

import CreatePatientService from '../services/CreatePatientService';
import UpdatePatientAvatar from '../services/UpdatePatientAvatarService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import CountPatientListService from '../services/CountPatientListService';
import ListPatientsService from '../services/ListPatientsService';
import ListSpecificPatientService from '../services/ListSpecificPatientService';
import ListPatientsByDoctorService from '../services/ListPatientsByDoctorService';
import SaveMedicalReportService from '../services/SaveMedicalReportService';
import ListMedicalReportService from '../services/ListMedicalReportService';
import ListSpecificPatientByDocumentService from '../services/ListSpecificPatientByDocumentService';

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
    const { patient_id } = request.body;
    const updateAvatar = new UpdatePatientAvatar();

    const patient = await updateAvatar.execute({
      patient_id,
      filename: request.file.filename,
    });

    return response.json(patient);
  },
);

patientsRouter.get('/pagination', async (request, response) => {
  const patientCount = new CountPatientListService();

  const numberOfPatients = await patientCount.execute();

  return response.json(numberOfPatients);
});

patientsRouter.get('/', async (request, response) => {
  const { page } = request.query;

  const listPatient = new ListPatientsService();

  const parsedPage = Number(page);

  const patientList = await listPatient.execute({ page: parsedPage });

  return response.json(patientList);
});

patientsRouter.get('/doctor/:doctor', async (request, response) => {
  const { page } = request.query;
  const { doctor } = request.params;

  const listPatient = new ListPatientsByDoctorService();

  const parsedPage = Number(page);

  const patientList = await listPatient.execute({ page: parsedPage, doctor });

  return response.json(patientList);
});

patientsRouter.get('/document/:document', async (request, response) => {
  const { document } = request.params;

  const listPatient = new ListSpecificPatientByDocumentService();

  const patient = await listPatient.execute({ ssn: document });

  return response.json(patient);
});

patientsRouter.get('/:id', async (request, response) => {
  const { id } = request.params;

  const listPatient = new ListSpecificPatientService();

  const patient = await listPatient.execute({ id });

  return response.json(patient);
});

patientsRouter.post('/medical-record', async (request, response) => {
  const { patient_id, record, date, doctor_id } = request.body;

  const saveMedicalRecord = new SaveMedicalReportService();

  const medicalRecord = await saveMedicalRecord.execute({
    patient_id,
    record,
    date,
    doctor_id,
  });

  return response.json(medicalRecord);
});

patientsRouter.get('/:id/medical-record', async (request, response) => {
  const { id } = request.params;

  const listMedicalRecord = new ListMedicalReportService();

  const medicalRecord = await listMedicalRecord.execute({
    id,
  });

  return response.json({ record: medicalRecord });
});

export default patientsRouter;
