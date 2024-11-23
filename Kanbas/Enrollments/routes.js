import * as enrollmentsDao from './dao.js';

export default function EnrollmentRoutes(app) {
    // Enroll a user in a course
    app.post("/api/enrollments/:userId/:courseId", (req, res) => {
        const { userId, courseId } = req.params;
        const enrollment = enrollmentsDao.createEnrollment(userId, courseId);
        res.status(201).json(enrollment);
    });

    // Unenroll a user from a course
    app.delete("/api/enrollments/:userId/:courseId", (req, res) => {
        const { userId, courseId } = req.params;
        const status = enrollmentsDao.deleteEnrollment(userId, courseId);
        res.json(status);
    });

    // Get all enrollments
    app.get("/api/enrollments", (req, res) => {
        const enrollments = enrollmentsDao.findAllEnrollments();
        res.json(enrollments);
    });

    // Get all users in a course
    app.get("/api/enrollments/:courseId", (req, res) => {
        const { courseId } = req.params;
        const users = enrollmentsDao.findUsersInCourse(courseId);
        res.json(users);
    });
}
