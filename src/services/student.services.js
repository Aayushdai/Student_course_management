import { createStudent, getStudentByEmail, getStudentById} from '../repository/student.repo.js';
import { generateToken } from '../utils/jwt.js';
import {hashPassword, comparePassword} from '../utils/password.js';

export const RegisterStudentService = async (studentData)=> {
    const existingStudent = await getStudentByEmail(studentData.email);

    if (existingStudent) {
        throw new Error('Student with this email already exists');
    }

    const hashedPassword = await hashPassword(studentData.password);
    studentData.password = hashedPassword;
    const student =await createStudent(studentData);

    const token = generateToken(student);
    delete student.dataValues.password; // Remove password from the returned student object

    return { student: {
        id:student.id
        , name:student.name
        , email:student.email
        , phone:student.phone
        , address:student.address
        , course_id:student.course_id
    },
        token };
}

export const LoginStudentService = async (email, password) => {
    const student = await getStudentByEmail(email);
    if(!student){
        throw new Error('Invalid email or password');
    }

    const isPasswordValid = await comparePassword(password, student.password);
    if(!isPasswordValid){
        throw new Error('Invalid email or password');
    }
    delete student.dataValues.password; // Remove password from the returned student object
    const token = generateToken(student);
     return { student: {
        id:student.id
        , name:student.name
        , email:student.email
        , phone:student.phone
        , address:student.address
        , course_id:student.course_id
    },
        token };
    
}

export const GetStudentProfileService = async (studentId) => {
    
    const student = await getStudentById(studentId);
    if(!student || student.id !== parseInt(studentId)){
        throw new Error('Student not found or unauthorized access');
    }
    return { student: {
        id:student.id
        , name:student.name
        , email:student.email
        , phone:student.phone
        , address:student.address
        , course_id:student.course_id
    }};


}