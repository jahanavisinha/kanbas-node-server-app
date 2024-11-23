import Database from "../Database/index.js";

const { enrollments } = Database;

export const createEnrollment = (userId, courseId) => {
    const newEnrollment = { _id: Date.now(), user: userId, course: courseId };
    enrollments.push(newEnrollment);
    return newEnrollment;
};

export const deleteEnrollment = (userId, courseId) => {
    const index = enrollments.findIndex(
        (e) => e.user === userId && e.course === courseId
    );
    if (index !== -1) {
        enrollments.splice(index, 1);
        return { message: "Unenrolled successfully" };
    }
    return { message: "Enrollment not found" };
};

export const findAllEnrollments = () => enrollments;

export const findUsersInCourse = (courseId) =>
    enrollments.filter((e) => e.course === courseId);
