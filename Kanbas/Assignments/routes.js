import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
    // Get all assignments
    app.get("/api/assignments", (req, res) => {
        const assignments = dao.findAllAssignments();
        res.json(assignments);
    });

    // Get assignment by ID
    app.get("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        const assignment = dao.findAssignmentById(assignmentId);
        if (assignment) {
            res.json(assignment);
        } else {
            res.status(404).send({ error: "Assignment not found" });
        }
    });

    // Create a new assignment
    app.post("/api/assignments", (req, res) => {
        const assignment = req.body;
        const newAssignment = dao.createAssignment(assignment);
        res.status(201).json(newAssignment);
    });

    // Update an assignment
    app.put("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        const assignmentUpdates = req.body;
        const updatedAssignment = dao.updateAssignment(assignmentId, assignmentUpdates);
        res.json(updatedAssignment);
    });

    // Delete an assignment
    app.delete("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        const status = dao.deleteAssignment(assignmentId);
        res.json(status);
    });
}
