package cz.upce.unicorn.workshop.timetable.repository;

import cz.upce.unicorn.workshop.timetable.entity.Enrollment;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface EnrollmentRepository extends AbstractRepository<Enrollment> {
//    @Query("select e from Enrollment e join e.classes c where  c.id = :id")
    List<Enrollment> findEnrollmentByClassesId(Integer id);
}
