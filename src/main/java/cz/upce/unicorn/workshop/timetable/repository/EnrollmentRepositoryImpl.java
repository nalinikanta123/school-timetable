package cz.upce.unicorn.workshop.timetable.repository;

import cz.upce.unicorn.workshop.timetable.entity.Enrollment;

import java.util.List;

public class EnrollmentRepositoryImpl extends AbstractRepositoryImpl<Enrollment> implements EnrollmentRepository {
    @Override
    public List<Enrollment> findEnrollmentByClassesId(Integer id) {
        return null;
    }

    @Override
    public List<Enrollment> findEnrollmentByStudentId(Integer id) {
        return null;
    }

    @Override
    public List<Enrollment> findEnrollmentsByClassesIdAndStudentId(Integer classesId, Integer studentId) {
        return null;
    }

    @Override
    protected Class<Enrollment> getClazz() {
        return Enrollment.class;
    }
}
