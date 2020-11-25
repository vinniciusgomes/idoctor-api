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
var Patient_1 = __importDefault(require("../models/Patient"));
var CreatePatientService = /** @class */ (function () {
    function CreatePatientService() {
    }
    CreatePatientService.prototype.execute = function (_a) {
        var name = _a.name, email = _a.email, phone = _a.phone, date_of_birth = _a.date_of_birth, gender = _a.gender, skin_color = _a.skin_color, naturalness = _a.naturalness, marital_status = _a.marital_status, ssn = _a.ssn, degree_of_instuction = _a.degree_of_instuction, profession = _a.profession, health_insurance = _a.health_insurance, zip_code = _a.zip_code, address = _a.address, complement = _a.complement, address_number = _a.address_number, neighborhood = _a.neighborhood, city = _a.city, fu = _a.fu, clinic_id = _a.clinic_id;
        return __awaiter(this, void 0, void 0, function () {
            var patientRepository, patientExist, patient, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        patientRepository = typeorm_1.getRepository(Patient_1.default);
                        return [4 /*yield*/, patientRepository.findOne({ ssn: ssn })];
                    case 1:
                        patientExist = _c.sent();
                        if (patientExist) {
                            throw new AppError_1.default('Patient already registered', 400);
                        }
                        patient = patientRepository.create({
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
                        });
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, patientRepository.save(patient)];
                    case 3:
                        _c.sent();
                        return [2 /*return*/, patient];
                    case 4:
                        _b = _c.sent();
                        throw new AppError_1.default('Error on save Patient', 500);
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return CreatePatientService;
}());
exports.default = CreatePatientService;
