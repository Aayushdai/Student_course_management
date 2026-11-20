import routes from 'express';
import {authenticateStudent} from '../middleware/auth.middleware.js';
import { register, login, getProfile } from '../controllers/student.controller.js';

const router = routes.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', authenticateStudent, getProfile);

export default router;