package com.github.softwaresale.opus.classroom

import com.github.softwaresale.opus.assignment.Assignment
import javax.persistence.*

@Entity
class Classroom(
        var name: String,
        @OneToMany(cascade = [CascadeType.ALL])
        var times: MutableList<Timeslot> = mutableListOf(),
        @OneToMany(cascade = [CascadeType.ALL])
        var assignments: MutableList<Assignment> = mutableListOf(),
        @Id @GeneratedValue var id: Long?,
        var description: String?
) {
    fun addAssignment(assignment: Assignment) {
        this.assignments.add(assignment)
    }
}