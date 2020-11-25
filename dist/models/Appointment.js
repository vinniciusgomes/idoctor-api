"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Clinic_1 = __importDefault(require("./Clinic"));
var Doctor_1 = __importDefault(require("./Doctor"));
var Patient_1 = __importDefault(require("./Patient"));
var Appointment = /** @class */ (function () {
    function Appointment() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Appointment.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column('date'),
        __metadata("design:type", Date)
    ], Appointment.prototype, "date", void 0);
    __decorate([
        typeorm_1.Column('time'),
        __metadata("design:type", Date)
    ], Appointment.prototype, "start_time", void 0);
    __decorate([
        typeorm_1.Column('int'),
        __metadata("design:type", Number)
    ], Appointment.prototype, "status", void 0);
    __decorate([
        typeorm_1.Column('int'),
        __metadata("design:type", Number)
    ], Appointment.prototype, "type", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Appointment.prototype, "doctor_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Doctor_1.default; }, function (doctor) { return doctor.appointments; }),
        typeorm_1.JoinColumn({ name: 'doctor_id' }),
        __metadata("design:type", Doctor_1.default)
    ], Appointment.prototype, "doctor", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Appointment.prototype, "patient_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Patient_1.default; }, function (patient) { return patient.appointments; }),
        typeorm_1.JoinColumn({ name: 'patient_id' }),
        __metadata("design:type", Patient_1.default)
    ], Appointment.prototype, "patient", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Appointment.prototype, "clinic_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Clinic_1.default; }, function (clinic) { return clinic.appointments; }),
        typeorm_1.JoinColumn({ name: 'clinic_id' }),
        __metadata("design:type", Clinic_1.default)
    ], Appointment.prototype, "clinic", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Appointment.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Appointment.prototype, "updated_at", void 0);
    Appointment = __decorate([
        typeorm_1.Entity('appointments')
    ], Appointment);
    return Appointment;
}());
exports.default = Appointment;
