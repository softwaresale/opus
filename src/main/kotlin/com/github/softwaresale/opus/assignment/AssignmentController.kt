package com.github.softwaresale.opus.assignment

import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/v1/assignments")
class AssignmentController(
        private val assignmentService: AssignmentService
) {
    @GetMapping
    fun getAll(): Iterable<Assignment> = assignmentService.getAll()

    @GetMapping("/{id}")
    fun getById(@PathVariable id: String) = assignmentService.getById(id)

    @PostMapping
    fun create(@RequestBody assignment: Assignment) = assignmentService.create(assignment)

    @PutMapping
    fun update(@RequestBody assignment: Assignment) = assignmentService.update(assignment)
}