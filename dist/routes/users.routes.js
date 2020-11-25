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
var CreateUserService_1 = __importDefault(require("../services/CreateUserService"));
var CreateDoctorService_1 = __importDefault(require("../services/CreateDoctorService"));
var UpdateUserAvatarService_1 = __importDefault(require("../services/UpdateUserAvatarService"));
var upload_1 = __importDefault(require("../config/upload"));
var ListDoctorsService_1 = __importDefault(require("../services/ListDoctorsService"));
var ensureAuthenticated_1 = __importDefault(require("../middlewares/ensureAuthenticated"));
var upload = multer_1.default(upload_1.default);
var usersRouter = express_1.Router();
usersRouter.post('/', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, login, password, type, clinic_id, createUser, user, _b, speciality, start_time, end_time, createDoctor, doctor;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = request.body, name = _a.name, login = _a.login, password = _a.password, type = _a.type, clinic_id = _a.clinic_id;
                createUser = new CreateUserService_1.default();
                return [4 /*yield*/, createUser.execute({
                        name: name,
                        login: login,
                        password: password,
                        type: type,
                        clinic_id: clinic_id,
                    })];
            case 1:
                user = _c.sent();
                if (!user) {
                    return [2 /*return*/, response
                            .status(500)
                            .json({ error: 'An error occurred while creating user' })];
                }
                delete user.password;
                if (!(type == 2)) return [3 /*break*/, 3];
                _b = request.body, speciality = _b.speciality, start_time = _b.start_time, end_time = _b.end_time;
                createDoctor = new CreateDoctorService_1.default();
                return [4 /*yield*/, createDoctor.execute({
                        speciality: speciality,
                        start_time: start_time,
                        end_time: end_time,
                        user_id: user.id,
                    })];
            case 2:
                doctor = _c.sent();
                delete doctor.user;
                return [2 /*return*/, response.json({ user: user, doctor: doctor })];
            case 3: return [2 /*return*/, response.json(user)];
        }
    });
}); });
usersRouter.patch('/avatar', ensureAuthenticated_1.default, upload.single('avatar'), function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var user_id, updateAvatar, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                user_id = request.body.user_id;
                updateAvatar = new UpdateUserAvatarService_1.default();
                return [4 /*yield*/, updateAvatar.execute({
                        user_id: user_id,
                        filename: request.file.filename,
                    })];
            case 1:
                user = _a.sent();
                delete user.password;
                return [2 /*return*/, response.json(user)];
        }
    });
}); });
usersRouter.get('/doctors', ensureAuthenticated_1.default, function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var listDoctor, doctorList;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                listDoctor = new ListDoctorsService_1.default();
                return [4 /*yield*/, listDoctor.execute()];
            case 1:
                doctorList = _a.sent();
                return [2 /*return*/, response.json(doctorList)];
        }
    });
}); });
exports.default = usersRouter;
