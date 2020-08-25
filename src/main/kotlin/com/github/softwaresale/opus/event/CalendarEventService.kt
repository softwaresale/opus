package com.github.softwaresale.opus.event

import com.github.softwaresale.opus.classroom.Classroom
import com.github.softwaresale.opus.classroom.ClassroomService
import org.springframework.stereotype.Service
import java.time.DayOfWeek
import java.time.LocalDateTime

@Service
class CalendarEventService(
        private val classroomService: ClassroomService
) {
    fun getEventsForRange(start: LocalDateTime, end: LocalDateTime): List<CalendarEvent> {
        /*
        Filter the classroom set down to those that either have a start/end date
        within the range, or it's a repeat date and the end date is less than
        the end time
         */
        return this.classroomService.findAll()
                .filter { classroom ->
                    classroom.times.any {
                        (it.startTime.isAfter(start) && it.endTime.isBefore(end)) ||
                                (it.repeat && it.repeatEndDate.isBefore(end))
                    }
                }
                .flatMap(this::mapClassToCalendarEvents)
    }

    fun mapClassToCalendarEvents(event: Classroom): List<CalendarEvent> {
        return event.times.map { timeslot ->
            if (timeslot.repeat) {
                val repeatDays = timeslot.repeatDays.split(',').map { it.toInt(10) }
                return repeatDays.map { day ->
                    val adjustedDay = if (day == 0) 7 else day
                    if (timeslot.startTime.dayOfWeek == DayOfWeek.of(adjustedDay)) {
                        CalendarEvent(
                                start = timeslot.startTime,
                                end = timeslot.endTime,
                                title = event.name,
                                draggable = false,
                                allDay = false,
                                id = null
                        )
                    } else {
                        val newDay = adjustedDay - timeslot.startTime.dayOfWeek.value
                        val newStart = timeslot.startTime.plusDays(newDay.toLong())
                        val newEnd = timeslot.endTime.plusDays(newDay.toLong())
                        CalendarEvent(
                                start = newStart,
                                end = newEnd,
                                title = event.name,
                                draggable = false,
                                allDay = false,
                                id = null
                        )
                    }
                }
            } else {
                return listOf(CalendarEvent(
                        start = timeslot.startTime,
                        end = timeslot.endTime,
                        title = event.name,
                        allDay = false,
                        draggable = false,
                        id = null
                ))
            }
        }
    }
}