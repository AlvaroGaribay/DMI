import { Application } from 'express';
import UserNetwork from '../network/user';
import Routes from '../utils/constants/routes.json'

function routes (app: Application) {
    app.use(Routes.userV1, UserNetwork);
}

export default routes;