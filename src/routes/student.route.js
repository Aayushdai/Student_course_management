import routes from 'express';
import { register, login, getProfile } from '../controllers/student.controller.js';

const router = routes.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', getProfile);

export default router;