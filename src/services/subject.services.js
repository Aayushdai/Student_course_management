import {createSubject, getAllSubjects, getSubjectById, updateSubject, deleteSubject} from "../repository/subject.repo.js";


export const createSubjectService = async (subjectData) => {
    return await createSubject(subjectData);
}

export const getAllSubjectsService = async () => {
    return await getAllSubjects();
}

export const getSubjectByIdService = async (id) => {
    return await getSubjectById(id);
}

export const updateSubjectService = async (id, subjectData) => {
    return await updateSubject(id, subjectData);
}

export const deleteSubjectService = async (id) => {
    return await deleteSubject(id);
}