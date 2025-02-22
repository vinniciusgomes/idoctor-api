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
var typeorm_1 = require("typeorm");
var AppError_1 = __importDefault(require("../errors/AppError"));
var Appointment_1 = __importDefault(require("../models/Appointment"));
var ListAppointmentsInMonthByDoctorService = /** @class */ (function () {
    function ListAppointmentsInMonthByDoctorService() {
    }
    ListAppointmentsInMonthByDoctorService.prototype.execute = function (_a) {
        var month = _a.month, year = _a.year, doctor = _a.doctor, limit = _a.limit;
        return __awaiter(this, void 0, void 0, function () {
            var appointmentRepository, appointmentList, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        appointmentRepository = typeorm_1.getRepository(Appointment_1.default);
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, appointmentRepository
                                .createQueryBuilder('appointment')
                                .select([
                                'appointment.id',
                                'appointment.date',
                                'appointment.status',
                                'appointment.type',
                                'appointment.start_time',
                                'patient.name',
                                'patient.id',
                                'patient.email',
                                'patient.phone',
                                'doctor.speciality',
                                'doctor.id',
                                'user.name',
                            ])
                                .leftJoin('appointment.patient', 'patient')
                                .leftJoin('appointment.doctor', 'doctor')
                                .innerJoin('doctor.user', 'user')
                                .where('EXTRACT(MONTH FROM appointment.date) = :month', { month: month })
                                .andWhere('EXTRACT(YEAR FROM appointment.date) = :year', { year: year })
                                .andWhere('doctor.id = :doctor', { doctor: doctor })
                                .orderBy('appointment.date', 'ASC')
                                .addOrderBy('appointment.start_time', 'ASC')
                                .limit(Number(limit))
                                .getMany()];
                    case 2:
                        appointmentList = _c.sent();
                        return [2 /*return*/, appointmentList];
                    case 3:
                        _b = _c.sent();
                        throw new AppError_1.default('Erro on get patients list', 500);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ListAppointmentsInMonthByDoctorService;
}());
exports.default = ListAppointmentsInMonthByDoctorService;
