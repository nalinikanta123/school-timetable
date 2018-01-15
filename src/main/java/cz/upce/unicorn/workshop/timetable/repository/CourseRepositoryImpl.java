package cz.upce.unicorn.workshop.timetable.repository;

import cz.upce.unicorn.workshop.timetable.entity.Course;

public class CourseRepositoryImpl extends AbstractRepositoryImpl<Course> implements CourseRepository {
    @Override
    protected Class<Course> getClazz() {
        return Course.class;
    }
}
