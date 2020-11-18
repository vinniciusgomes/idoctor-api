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
var CreateAppointmentService_1 = __importDefault(require("../services/CreateAppointmentService"));
var ensureAuthenticated_1 = __importDefault(require("../middlewares/ensureAuthenticated"));
var ListAppointmentsService_1 = __importDefault(require("../services/ListAppointmentsService"));
var ListSpecificAppointmentService_1 = __importDefault(require("../services/ListSpecificAppointmentService"));
var ListAppointmentsInMonthService_1 = __importDefault(require("../services/ListAppointmentsInMonthService"));
var ListAppointmentsByDoctorService_1 = __importDefault(require("../services/ListAppointmentsByDoctorService"));
var ListAppointmentsInMonthByDoctorService_1 = __importDefault(require("../services/ListAppointmentsInMonthByDoctorService"));
var appointmentsRouter = express_1.Router();
appointmentsRouter.use(ensureAuthenticated_1.default);
appointmentsRouter.post('/', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, date, start_time, status, type, doctor_id, patient_id, clinic_id, createAppointment, appointment;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = request.body, date = _a.date, start_time = _a.start_time, status = _a.status, type = _a.type, doctor_id = _a.doctor_id, patient_id = _a.patient_id, clinic_id = _a.clinic_id;
                createAppointment = new CreateAppointmentService_1.default();
                return [4 /*yield*/, createAppointment.execute({
                        date: date,
                        start_time: start_time,
                        status: status,
                        type: type,
                        doctor_id: doctor_id,
                        patient_id: patient_id,
                        clinic_id: clinic_id,
                    })];
            case 1:
                appointment = _b.sent();
                if (!appointment) {
                    return [2 /*return*/, response
                            .status(500)
                            .json({ error: 'An error occurred while creating appointment' })];
                }
                return [2 /*return*/, response.json(appointment)];
        }
    });
}); });
appointmentsRouter.get('/', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var date, limit, listAppointments, parsedDate, appointmentList;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                date = request.query.date;
                if (!request.query.limit) {
                    limit = 5;
                }
                else {
                    limit = Number(request.query.limit);
                }
                listAppointments = new ListAppointmentsService_1.default();
                parsedDate = date === null || date === void 0 ? void 0 : date.toString();
                return [4 /*yield*/, listAppointments.execute({
                        date: parsedDate,
                        limit: limit,
                    })];
            case 1:
                appointmentList = _a.sent();
                return [2 /*return*/, response.json(appointmentList)];
        }
    });
}); });
appointmentsRouter.get('/doctor/:doctor', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var date, doctor, limit, listAppointments, parsedDate, appointmentList;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                date = request.query.date;
                doctor = request.params.doctor;
                if (!request.query.limit) {
                    limit = 5;
                }
                else {
                    limit = Number(request.query.limit);
                }
                listAppointments = new ListAppointmentsByDoctorService_1.default();
                parsedDate = date === null || date === void 0 ? void 0 : date.toString();
                return [4 /*yield*/, listAppointments.execute({
                        date: parsedDate,
                        doctor: doctor,
                        limit: limit,
                    })];
            case 1:
                appointmentList = _a.sent();
                return [2 /*return*/, response.json(appointmentList)];
        }
    });
}); });
appointmentsRouter.get('/month', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, month, year, limit, listAppointments, parsedMonth, parsedYear, appointmentList;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = request.query, month = _a.month, year = _a.year;
                if (!request.query.limit) {
                    limit = 5;
                }
                else {
                    limit = Number(request.query.limit);
                }
                listAppointments = new ListAppointmentsInMonthService_1.default();
                parsedMonth = Number(month);
                parsedYear = Number(year);
                return [4 /*yield*/, listAppointments.execute({
                        month: parsedMonth,
                        year: parsedYear,
                        limit: limit,
                    })];
            case 1:
                appointmentList = _b.sent();
                return [2 /*return*/, response.json(appointmentList)];
        }
    });
}); });
appointmentsRouter.get('/month/doctor/:doctor', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, month, year, doctor, limit, listAppointments, parsedMonth, parsedYear, appointmentList;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = request.query, month = _a.month, year = _a.year;
                doctor = request.params.doctor;
                if (!request.query.limit) {
                    limit = 5;
                }
                else {
                    limit = Number(request.query.limit);
                }
                listAppointments = new ListAppointmentsInMonthByDoctorService_1.default();
                parsedMonth = Number(month);
                parsedYear = Number(year);
                return [4 /*yield*/, listAppointments.execute({
                        month: parsedMonth,
                        year: parsedYear,
                        doctor: doctor,
                        limit: limit,
                    })];
            case 1:
                appointmentList = _b.sent();
                return [2 /*return*/, response.json(appointmentList)];
        }
    });
}); });
appointmentsRouter.get('/:id', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, listAppointment, appointment;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = request.params.id;
                listAppointment = new ListSpecificAppointmentService_1.default();
                return [4 /*yield*/, listAppointment.execute({ id: id })];
            case 1:
                appointment = _a.sent();
                return [2 /*return*/, response.json(appointment)];
        }
    });
}); });
exports.default = appointmentsRouter;
