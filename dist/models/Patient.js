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
var Appointment_1 = __importDefault(require("./Appointment"));
var Clinic_1 = __importDefault(require("./Clinic"));
var MedicalRecord_1 = __importDefault(require("./MedicalRecord"));
var Patient = /** @class */ (function () {
    function Patient() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Patient.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Patient.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Patient.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Patient.prototype, "phone", void 0);
    __decorate([
        typeorm_1.Column('date'),
        __metadata("design:type", Date)
    ], Patient.prototype, "date_of_birth", void 0);
    __decorate([
        typeorm_1.Column('char', { length: 1 }),
        __metadata("design:type", String)
    ], Patient.prototype, "gender", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Patient.prototype, "skin_color", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Patient.prototype, "naturalness", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Patient.prototype, "marital_status", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Patient.prototype, "ssn", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Patient.prototype, "degree_of_instuction", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Patient.prototype, "profession", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Patient.prototype, "health_insurance", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Patient.prototype, "zip_code", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Patient.prototype, "address", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Patient.prototype, "complement", void 0);
    __decorate([
        typeorm_1.Column('int'),
        __metadata("design:type", Number)
    ], Patient.prototype, "address_number", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Patient.prototype, "neighborhood", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Patient.prototype, "city", void 0);
    __decorate([
        typeorm_1.Column('char', { length: 2 }),
        __metadata("design:type", String)
    ], Patient.prototype, "fu", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return MedicalRecord_1.default; }, function (medical_record) { return medical_record.patient; }),
        __metadata("design:type", Array)
    ], Patient.prototype, "medical_records", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Patient.prototype, "avatar", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Appointment_1.default; }, function (appointment) { return appointment.patient; }),
        __metadata("design:type", Array)
    ], Patient.prototype, "appointments", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Patient.prototype, "clinic_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Clinic_1.default; }, function (clinic) { return clinic.patients; }),
        typeorm_1.JoinColumn({ name: 'clinic_id' }),
        __metadata("design:type", Clinic_1.default)
    ], Patient.prototype, "clinic", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Patient.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Patient.prototype, "updated_at", void 0);
    Patient = __decorate([
        typeorm_1.Entity('patients')
    ], Patient);
    return Patient;
}());
exports.default = Patient;
