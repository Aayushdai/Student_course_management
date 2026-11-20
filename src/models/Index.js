import Student from "./Student.js";
import Faculty from "./Faculty.js";
import Course from "./Course.js";
import Enrollment from "./Enrollment.js";
import Subject from "./Subject.js";

Student.hasMany(Enrollment, { foreignKey: "student_id" });
Course.hasMany(Subject, { foreignKey: "course_id" });
Faculty.hasMany(Course, { foreignKey: "faculty_id" });
Enrollment.belongsTo(Student, { foreignKey: "student_id" });
Enrollment.belongsTo(Course, { foreignKey: "course_id" });
Subject.belongsTo(Course, { foreignKey: "course_id" });
Course.belongsTo(Faculty, { foreignKey: "faculty_id" });

export { Student, Faculty, Course, Enrollment, Subject };