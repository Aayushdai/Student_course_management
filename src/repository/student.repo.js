import Student from '../models/Student.js';

export const createStudent = async (studentData) => 
{
return await Student.create(studentData);
}

export const getAllStudents= async() => {
    return await Student.findAll();
}

export const getStudentById = async (id) => {
    return await Student.findByPk(id);
}

export const updateStudent = async (id, studentData)=>{
    return await Student.update(studentData, { where: { id } });
}

export const deleteStudent = async (id) => {
    return await Student.destroy({ where: { id } });
}
export const getStudentByEmail = async (email) => {
    return await Student.findOne({ where: { email } });
}