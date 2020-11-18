"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = require("jsonwebtoken");
var auth_1 = __importDefault(require("../config/auth"));
var AppError_1 = __importDefault(require("../errors/AppError"));
function ensureAuthenticated(request, response, next) {
    var headerToken = request.headers.authorization;
    if (!headerToken) {
        throw new AppError_1.default('JWT token is missing', 400);
    }
    var _a = headerToken.split(' '), token = _a[1];
    try {
        var decoded = jsonwebtoken_1.verify(token, auth_1.default.jwt.secret);
        var _b = decoded, sub = _b.sub, clinic = _b.clinic, type = _b.type;
        request.user = {
            id: sub,
            type: type,
            clinic: clinic,
        };
        return next();
    }
    catch (error) {
        throw new AppError_1.default('Invalid JWT token', 422);
    }
}
exports.default = ensureAuthenticated;
