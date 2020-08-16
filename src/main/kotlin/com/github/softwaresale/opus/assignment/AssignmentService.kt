package com.github.softwaresale.opus.assignment

import org.springframework.stereotype.Service

@Service
class AssignmentService(
        private val assignmentRepository: AssignmentRepository
) {
    fun getAll(): Iterable<Assignment> = assignmentRepository.findAll()

    fun getById(id: String): Assignment? {
        val assignment = assignmentRepository.findById(id)
        return if (assignment.isPresent) assignment.get() else null
    }

    fun create(assignment: Assignment): Assignment {
        return assignmentRepository.save(assignment)
    }
    
    fun update(assignment: Assignment): Assignment {
        return assignmentRepository.save(assignment)
    }
}