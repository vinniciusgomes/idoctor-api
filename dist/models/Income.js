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
var User_1 = __importDefault(require("./User"));
var Income = /** @class */ (function () {
    function Income() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Income.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Income.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column('decimal'),
        __metadata("design:type", Number)
    ], Income.prototype, "value", void 0);
    __decorate([
        typeorm_1.Column('int'),
        __metadata("design:type", Number)
    ], Income.prototype, "status", void 0);
    __decorate([
        typeorm_1.Column('date'),
        __metadata("design:type", Date)
    ], Income.prototype, "deadline", void 0);
    __decorate([
        typeorm_1.Column('date'),
        __metadata("design:type", Date)
    ], Income.prototype, "receipt_date", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Income.prototype, "user_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return User_1.default; }),
        typeorm_1.JoinColumn({ name: 'user_id' }),
        __metadata("design:type", User_1.default)
    ], Income.prototype, "user", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Income.prototype, "clinic_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Clinic_1.default; }, function (clinic) { return clinic.incomes; }),
        typeorm_1.JoinColumn({ name: 'clinic_id' }),
        __metadata("design:type", Clinic_1.default)
    ], Income.prototype, "clinic", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Income.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Income.prototype, "updated_at", void 0);
    Income = __decorate([
        typeorm_1.Entity('incomes')
    ], Income);
    return Income;
}());
exports.default = Income;
