package com.github.softwaresale.opus.assignment

import java.time.LocalDate
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
class Assignment(
        var name: String,
        var due: LocalDate = LocalDate.now().plusDays(1),
        var classId: String?,
        @Id @GeneratedValue var id: Long?,
        var description: String?
)