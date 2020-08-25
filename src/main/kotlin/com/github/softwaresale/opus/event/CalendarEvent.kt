package com.github.softwaresale.opus.event

import java.time.LocalDateTime

data class CalendarEvent(
        val start: LocalDateTime,
        val end: LocalDateTime,
        val title: String,
        val allDay: Boolean,
        val draggable: Boolean,
        var id: Long?
)