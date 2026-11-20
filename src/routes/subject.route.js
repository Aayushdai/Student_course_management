import routes from 'express';
import {createSubject, getAllSubjects, getSubjectById, updateSubject, deleteSubject} from '../controllers/subject.controller.js';

const router = routes.Router();

router.post('/subjects', createSubject);
router.get('/subjects', getAllSubjects);
router.get('/subjects/:id', getSubjectById);
router.put('/subjects/:id', updateSubject);
router.delete('/subjects/:id', deleteSubject);

export default router;