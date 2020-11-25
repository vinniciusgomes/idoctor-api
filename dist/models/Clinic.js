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
var Expense_1 = __importDefault(require("./Expense"));
var Income_1 = __importDefault(require("./Income"));
var Patient_1 = __importDefault(require("./Patient"));
var User_1 = __importDefault(require("./User"));
var Clinic = /** @class */ (function () {
    function Clinic() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Clinic.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Clinic.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Clinic.prototype, "zip_code", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Clinic.prototype, "address", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Clinic.prototype, "neighborhood", void 0);
    __decorate([
        typeorm_1.Column('int'),
        __metadata("design:type", Number)
    ], Clinic.prototype, "address_number", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Clinic.prototype, "city", void 0);
    __decorate([
        typeorm_1.Column('char', { length: 2 }),
        __metadata("design:type", String)
    ], Clinic.prototype, "fu", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Clinic.prototype, "phone", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Clinic.prototype, "email", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Appointment_1.default; }, function (appointment) { return appointment.clinic; }),
        __metadata("design:type", Array)
    ], Clinic.prototype, "appointments", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Expense_1.default; }, function (expense) { return expense.clinic; }),
        __metadata("design:type", Array)
    ], Clinic.prototype, "expenses", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Income_1.default; }, function (income) { return income.clinic; }),
        __metadata("design:type", Array)
    ], Clinic.prototype, "incomes", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Patient_1.default; }, function (patient) { return patient.clinic; }),
        __metadata("design:type", Array)
    ], Clinic.prototype, "patients", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return User_1.default; }, function (user) { return user.clinic; }),
        __metadata("design:type", Array)
    ], Clinic.prototype, "users", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Clinic.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Clinic.prototype, "updated_at", void 0);
    Clinic = __decorate([
        typeorm_1.Entity('clinics')
    ], Clinic);
    return Clinic;
}());
exports.default = Clinic;
