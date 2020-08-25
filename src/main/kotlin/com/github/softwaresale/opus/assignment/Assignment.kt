package com.github.softwaresale.opus.assignment

import com.fasterxml.jackson.annotation.JsonBackReference
import com.github.softwaresale.opus.classroom.Classroom
import java.time.LocalDate
import javax.persistence.*

@Entity
class Assignment(
        var name: String,
        var due: LocalDate = LocalDate.now().plusDays(1),
        var complete: Boolean = false,
        @ManyToOne(cascade = [CascadeType.ALL])
        @JsonBackReference
        var classroom: Classroom?,
        @Id @GeneratedValue var id: Long?,
        var description: String?
)