import Subject from "../models/Subject.js";

export const createSubject = async (subjectData) => {
    return await Subject.create(subjectData);
}

export const getAllSubjects = async () => {
    return await Subject.findAll();
}
export const getSubjectById = async (id) => {
    return await Subject.findByPk(id);
}
export const updateSubject = async (id, subjectData) => {
    return await Subject.update(subjectData, { where: { id } });
}
export const deleteSubject = async (id) => {
    return await Subject.destroy({ where: { id } });
}
