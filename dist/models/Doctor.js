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
var MedicalRecord_1 = __importDefault(require("./MedicalRecord"));
var User_1 = __importDefault(require("./User"));
var Doctor = /** @class */ (function () {
    function Doctor() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Doctor.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Doctor.prototype, "speciality", void 0);
    __decorate([
        typeorm_1.Column('time'),
        __metadata("design:type", Date)
    ], Doctor.prototype, "start_time", void 0);
    __decorate([
        typeorm_1.Column('time'),
        __metadata("design:type", Date)
    ], Doctor.prototype, "end_time", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Doctor.prototype, "user_id", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return User_1.default; }, function (user) { return user.doctor; }),
        typeorm_1.JoinColumn({ name: 'user_id' }),
        __metadata("design:type", User_1.default)
    ], Doctor.prototype, "user", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Appointment_1.default; }, function (appointment) { return appointment.doctor; }),
        __metadata("design:type", Array)
    ], Doctor.prototype, "appointments", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return MedicalRecord_1.default; }, function (medical_record) { return medical_record.doctor; }),
        __metadata("design:type", Array)
    ], Doctor.prototype, "medical_records", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Doctor.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Doctor.prototype, "updated_at", void 0);
    Doctor = __decorate([
        typeorm_1.Entity('doctors')
    ], Doctor);
    return Doctor;
}());
exports.default = Doctor;
