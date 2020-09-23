import { Router } from 'express';

import clinicsRouter from './clinics.routes';

const routes = Router();

routes.use('/clinics', clinicsRouter);

export default routes;
