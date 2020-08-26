package com.github.softwaresale.opus.classroom

import java.time.ZonedDateTime
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
class Timeslot(
        // @set:JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSXXX")
        var startTime: ZonedDateTime,
        // @set:JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSXXX")
        var endTime: ZonedDateTime,
        var repeat: Boolean,
        var repeatDays: String, // Comma separated string
        // @set:JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSXXX")
        var repeatEndDate: ZonedDateTime, // How long to repeat for
        @Id @GeneratedValue
        var id: Long?
)