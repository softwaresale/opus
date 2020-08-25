package com.github.softwaresale.opus.classroom

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ClassroomRepository : JpaRepository<Classroom, Long>