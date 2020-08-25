package com.github.softwaresale.opus.event

import com.github.softwaresale.opus.classroom.ClassroomService
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.server.ResponseStatusException
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

@RestController
@RequestMapping("/api/v1/events")
class CalendarEventController(
        private val calendarEventService: CalendarEventService,
        private val classroomService: ClassroomService
) {

    @GetMapping
    fun getAll(@RequestParam(name = "start") startStr: String, @RequestParam(name = "end") endStr: String?): List<CalendarEvent> {
        val formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
        val start = LocalDateTime.parse(startStr, formatter)
        val end = endStr?.let { LocalDateTime.parse(it, formatter) } ?: start.plusDays(6)
        return calendarEventService.getEventsForRange(start, end)
    }

    @GetMapping("/map")
    fun mapClassToEvents(@RequestParam classId: Long): List<CalendarEvent> {
        return this.classroomService.findById(classId)?.let {
            this.calendarEventService.mapClassToCalendarEvents(it)
        } ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "Classroom does not exist")
    }
}