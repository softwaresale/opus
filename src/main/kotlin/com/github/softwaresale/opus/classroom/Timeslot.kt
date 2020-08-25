package com.github.softwaresale.opus.classroom

import java.time.LocalDateTime
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
class Timeslot(
        var startTime: LocalDateTime,
        var endTime: LocalDateTime,
        var repeat: Boolean,
        var repeatDays: String, // Comma separated string
        var repeatEndDate: LocalDateTime, // How long to repeat for
        @Id @GeneratedValue
        var id: Long?
)