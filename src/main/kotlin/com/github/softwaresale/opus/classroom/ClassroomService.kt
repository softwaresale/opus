package com.github.softwaresale.opus.classroom

import com.github.softwaresale.opus.assignment.Assignment
import com.github.softwaresale.opus.assignment.AssignmentService
import org.springframework.stereotype.Service

@Service
class ClassroomService(
        private val classroomRepository: ClassroomRepository,
        private val assignmentService: AssignmentService
) {
    fun findAll(): Iterable<Classroom> = classroomRepository.findAll()

    fun findById(id: Long): Classroom? {
        val classroom = this.classroomRepository.findById(id)
        return if(classroom.isPresent) classroom.get() else null
    }

    fun save(classroom: Classroom) = this.classroomRepository.save(classroom)

    fun addAssignmentToClassroom(classId: Long, assignment: Assignment): Classroom? {
        return this.findById(classId)?.apply {
            addAssignment(assignment)
        }?.let {
            this.save(it)
        }
    }

    fun addAssignmentToClassroom(classId: Long, assignmentId: Long): Classroom? {
        return this.findById(classId)?.apply {
            assignmentService.getById(assignmentId)?.let {
                this.addAssignment(it)
            }
        }
    }
}