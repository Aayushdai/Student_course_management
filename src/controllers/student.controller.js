import {GetStudentProfileService, LoginStudentService, RegisterStudentService} from '../services/student.services.js';

export const register = async (req,res,next) => {
    try {
        const { student, token } = await RegisterStudentService(req.body);
        res.status(201).json({ student, token });
    } catch (error) {
        next(error);
    }
}

export const login = async (req,res,next) => {
    try {
        const { student, token } = await LoginStudentService(req.body.email, req.body.password);
        res.status(200).json({ student, token });
    } catch (error) {
        next(error);
    }
}

export const getProfile = async (req,res,next) => {
    try {
        const studentId = req.user.id; // Assuming the student ID is stored in req.user after authentication
        const { student } = await GetStudentProfileService(studentId);
        res.status(200).json({ student });
    } catch (error) {
        next(error);
    }
}