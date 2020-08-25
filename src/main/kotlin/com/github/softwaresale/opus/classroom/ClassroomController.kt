package com.github.softwaresale.opus.classroom

import com.github.softwaresale.opus.assignment.Assignment
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import org.springframework.web.server.ResponseStatusException

@RestController
@RequestMapping("/api/v1/classes")
class ClassroomController(
        private val classroomService: ClassroomService
) {
    @GetMapping
    fun getAll() = this.classroomService.findAll()

    @GetMapping("/{id}")
    fun getById(@PathVariable id: Long) = this.classroomService.findById(id)

    @PostMapping
    fun postNewItem(@RequestBody classroom: Classroom) = this.classroomService.save(classroom)

    @GetMapping("/{id}/assignments")
    fun getAssignments(@PathVariable id: Long): Iterable<Assignment> {
        return this.classroomService.findById(id)?.assignments
                ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "Classroom resource does not exist with id")
    }

    @PostMapping("/{id}/assignments")
    fun addNewAssignment(@PathVariable id: Long, @RequestBody assignment: Assignment): Classroom {
        return this.classroomService.addAssignmentToClassroom(id, assignment) ?:
            throw ResponseStatusException(HttpStatus.NOT_FOUND, "Classroom resource does not exist with id")
    }

    @PutMapping("/{classId}/assignments/{assignmentId}")
    fun addExistingAssignment(@PathVariable classId: Long, @PathVariable assignmentId: Long): Classroom {
        return this.classroomService.addAssignmentToClassroom(classId, assignmentId) ?:
                throw ResponseStatusException(HttpStatus.NOT_FOUND, "Resource could not be found")
    }
}