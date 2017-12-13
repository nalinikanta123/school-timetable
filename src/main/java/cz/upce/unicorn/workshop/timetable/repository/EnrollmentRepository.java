package cz.upce.unicorn.workshop.timetable.repository;

import cz.upce.unicorn.workshop.timetable.entity.Enrollment;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface EnrollmentRepository extends AbstractRepository<Enrollment> {

    List<Enrollment> findEnrollmentByClassesId(Integer id);

    List<Enrollment> findEnrollmentByStudentId(Integer id);

    List<Enrollment> findEnrollmentsByClassesIdAndStudentId(Integer classesId, Integer studentId);
}
