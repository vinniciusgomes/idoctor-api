import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '../config/auth';
import AppError from '../errors/AppError';

interface TokenPayload {
  type: number;
  clinic: string;
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const headerToken = request.headers.authorization;

  if (!headerToken) {
    throw new AppError('JWT token is missing', 400);
  }

  const [, token] = headerToken.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const { sub, clinic, type } = decoded as TokenPayload;

    request.user = {
      id: sub,
      type,
      clinic,
    };

    return next();
  } catch (error) {
    throw new AppError('Invalid JWT token', 422);
  }
}
