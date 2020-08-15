package com.github.softwaresale.opus.assignment

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.boot.context.properties.ConstructorBinding

@ConfigurationProperties("opus.assignments")
data class AssignmentProperties @ConstructorBinding constructor(
        var tableName: String,
        var username: String,
        var password: String
)