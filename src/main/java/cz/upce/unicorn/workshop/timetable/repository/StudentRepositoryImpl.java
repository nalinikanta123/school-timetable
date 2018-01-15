package cz.upce.unicorn.workshop.timetable.repository;

import cz.upce.unicorn.workshop.timetable.entity.Student;

public class StudentRepositoryImpl extends AbstractRepositoryImpl<Student> implements StudentRepository {
    @Override
    protected Class<Student> getClazz() {
        return Student.class;
    }
}
