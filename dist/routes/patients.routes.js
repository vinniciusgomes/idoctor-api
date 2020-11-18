"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var upload_1 = __importDefault(require("../config/upload"));
var CreatePatientService_1 = __importDefault(require("../services/CreatePatientService"));
var UpdatePatientAvatarService_1 = __importDefault(require("../services/UpdatePatientAvatarService"));
var ensureAuthenticated_1 = __importDefault(require("../middlewares/ensureAuthenticated"));
var CountPatientListService_1 = __importDefault(require("../services/CountPatientListService"));
var ListPatientsService_1 = __importDefault(require("../services/ListPatientsService"));
var ListSpecificPatientService_1 = __importDefault(require("../services/ListSpecificPatientService"));
var ListPatientsByDoctorService_1 = __importDefault(require("../services/ListPatientsByDoctorService"));
var SaveMedicalReportService_1 = __importDefault(require("../services/SaveMedicalReportService"));
var ListMedicalReportService_1 = __importDefault(require("../services/ListMedicalReportService"));
var upload = multer_1.default(upload_1.default);
var patientsRouter = express_1.Router();
patientsRouter.use(ensureAuthenticated_1.default);
patientsRouter.post('/', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, email, phone, date_of_birth, gender, skin_color, naturalness, marital_status, ssn, degree_of_instuction, profession, health_insurance, zip_code, address, complement, address_number, neighborhood, city, fu, medical_record, clinic_id, createPatient, patient;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = request.body, name = _a.name, email = _a.email, phone = _a.phone, date_of_birth = _a.date_of_birth, gender = _a.gender, skin_color = _a.skin_color, naturalness = _a.naturalness, marital_status = _a.marital_status, ssn = _a.ssn, degree_of_instuction = _a.degree_of_instuction, profession = _a.profession, health_insurance = _a.health_insurance, zip_code = _a.zip_code, address = _a.address, complement = _a.complement, address_number = _a.address_number, neighborhood = _a.neighborhood, city = _a.city, fu = _a.fu, medical_record = _a.medical_record, clinic_id = _a.clinic_id;
                createPatient = new CreatePatientService_1.default();
                return [4 /*yield*/, createPatient.execute({
                        name: name,
                        email: email,
                        phone: phone,
                        date_of_birth: date_of_birth,
                        gender: gender,
                        skin_color: skin_color,
                        naturalness: naturalness,
                        marital_status: marital_status,
                        ssn: ssn,
                        degree_of_instuction: degree_of_instuction,
                        profession: profession,
                        health_insurance: health_insurance,
                        zip_code: zip_code,
                        address: address,
                        complement: complement,
                        address_number: address_number,
                        neighborhood: neighborhood,
                        city: city,
                        fu: fu,
                        clinic_id: clinic_id,
                    })];
            case 1:
                patient = _b.sent();
                if (!patient) {
                    return [2 /*return*/, response
                            .status(500)
                            .json({ error: 'An error occurred while creating patient' })];
                }
                return [2 /*return*/, response.json(patient)];
        }
    });
}); });
patientsRouter.patch('/avatar', upload.single('avatar'), function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var patient_id, updateAvatar, patient;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                patient_id = request.body.patient_id;
                updateAvatar = new UpdatePatientAvatarService_1.default();
                return [4 /*yield*/, updateAvatar.execute({
                        patient_id: patient_id,
                        filename: request.file.filename,
                    })];
            case 1:
                patient = _a.sent();
                return [2 /*return*/, response.json(patient)];
        }
    });
}); });
patientsRouter.get('/pagination', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var patientCount, numberOfPatients;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                patientCount = new CountPatientListService_1.default();
                return [4 /*yield*/, patientCount.execute()];
            case 1:
                numberOfPatients = _a.sent();
                return [2 /*return*/, response.json(numberOfPatients)];
        }
    });
}); });
patientsRouter.get('/', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var page, listPatient, parsedPage, patientList;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                page = request.query.page;
                listPatient = new ListPatientsService_1.default();
                parsedPage = Number(page);
                return [4 /*yield*/, listPatient.execute({ page: parsedPage })];
            case 1:
                patientList = _a.sent();
                return [2 /*return*/, response.json(patientList)];
        }
    });
}); });
patientsRouter.get('/doctor/:doctor', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var page, doctor, listPatient, parsedPage, patientList;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                page = request.query.page;
                doctor = request.params.doctor;
                listPatient = new ListPatientsByDoctorService_1.default();
                parsedPage = Number(page);
                return [4 /*yield*/, listPatient.execute({ page: parsedPage, doctor: doctor })];
            case 1:
                patientList = _a.sent();
                return [2 /*return*/, response.json(patientList)];
        }
    });
}); });
patientsRouter.get('/:id', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, listPatient, patient;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = request.params.id;
                listPatient = new ListSpecificPatientService_1.default();
                return [4 /*yield*/, listPatient.execute({ id: id })];
            case 1:
                patient = _a.sent();
                return [2 /*return*/, response.json(patient)];
        }
    });
}); });
patientsRouter.post('/medical-record', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, patient_id, record, date, doctor_id, saveMedicalRecord, medicalRecord;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = request.body, patient_id = _a.patient_id, record = _a.record, date = _a.date, doctor_id = _a.doctor_id;
                saveMedicalRecord = new SaveMedicalReportService_1.default();
                return [4 /*yield*/, saveMedicalRecord.execute({
                        patient_id: patient_id,
                        record: record,
                        date: date,
                        doctor_id: doctor_id,
                    })];
            case 1:
                medicalRecord = _b.sent();
                return [2 /*return*/, response.json(medicalRecord)];
        }
    });
}); });
patientsRouter.get('/:id/medical-record', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, listMedicalRecord, medicalRecord;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = request.params.id;
                listMedicalRecord = new ListMedicalReportService_1.default();
                return [4 /*yield*/, listMedicalRecord.execute({
                        id: id,
                    })];
            case 1:
                medicalRecord = _a.sent();
                return [2 /*return*/, response.json({ record: medicalRecord })];
        }
    });
}); });
exports.default = patientsRouter;
