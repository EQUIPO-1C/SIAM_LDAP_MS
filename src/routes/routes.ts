import { Router } from 'express';
import ldapController from '../controllers/ldap.controller';

const api = Router()
    .use('/ldap', ldapController);

export default Router().use('/api', api);