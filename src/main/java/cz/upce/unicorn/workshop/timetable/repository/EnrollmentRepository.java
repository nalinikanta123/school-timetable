package cz.upce.unicorn.workshop.timetable.repository;

import cz.upce.unicorn.workshop.timetable.entity.Enrollment;

import java.util.List;

public interface EnrollmentRepository extends AbstractRepository<Enrollment> {

    List<Enrollment> findEnrollmentByClassesId(Integer id);

    List<Enrollment> findEnrollmentByStudentId(Integer id);

    List<Enrollment> findEnrollmentsByClassesIdAndStudentId(Integer classesId, Integer studentId);
}
