package com.github.softwaresale.opus.assignment

import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
@EnableConfigurationProperties(AssignmentProperties::class)
class AssignmentConfiguration(
        private val properties: AssignmentProperties
) {

}