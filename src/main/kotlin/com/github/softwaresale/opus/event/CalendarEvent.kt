package com.github.softwaresale.opus.event

import java.time.ZonedDateTime

data class CalendarEvent(
        val start: ZonedDateTime,
        val end: ZonedDateTime,
        val title: String,
        val allDay: Boolean,
        val draggable: Boolean,
        var id: Long?
)