import {createSubjectService, getAllSubjectsService, getSubjectByIdService, updateSubjectService, deleteSubjectService} from "../services/subject.services.js";

export const createSubject = async (req, res) => {
    try {
        const subjectData = req.body;
        const newSubject = await createSubjectService(subjectData);
        res.status(201).json(newSubject);
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export const getAllSubjects = async (req, res) => {
    try {
        const subjects = await getAllSubjectsService();
        res.status(200).json(subjects);
    }catch( error){
        res.status(500).json({ error: error.message });
    }
}
export const getSubjectById = async (req, res) => {
    try {
        const { id } = req.params;
        const subject = await getSubjectByIdService(id);
        if (subject) {
            res.status(200).json(subject);
        } else {
            res.status(404).json({ error: 'Subject not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export const updateSubject = async (req, res) => {
    try {
        const { id } = req.params;
        const subjectData = req.body;
        const updatedSubject = await updateSubjectService(id, subjectData);
        if (updatedSubject[0] === 1) {
            res.status(200).json({ message: 'Subject updated successfully' });
        } else {
            res.status(404).json({ error: 'Subject not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export const deleteSubject = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedSubject = await deleteSubjectService(id);
        if (deletedSubject === 1) {
            res.status(200).json({ message: 'Subject deleted successfully' });
        } else {
            res.status(404).json({ error: 'Subject not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}