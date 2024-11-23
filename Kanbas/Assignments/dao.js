import Database from "../Database/index.js";

export function findAllAssignments() {
    return Database.assignments;
}

export function findAssignmentById(assignmentId) {
    return Database.assignments.find((assignment) => assignment._id === assignmentId);
}

export function createAssignment(assignment) {
    const newAssignment = { ...assignment, _id: Date.now().toString() };
    Database.assignments = [...Database.assignments, newAssignment];
    return newAssignment;
}

export function updateAssignment(assignmentId, assignmentUpdates) {
    const assignment = Database.assignments.find((assignment) => assignment._id === assignmentId);
    Object.assign(assignment, assignmentUpdates);
    return assignment;
}

export function deleteAssignment(assignmentId) {
    Database.assignments = Database.assignments.filter((assignment) => assignment._id !== assignmentId);
    return { success: true };
}
