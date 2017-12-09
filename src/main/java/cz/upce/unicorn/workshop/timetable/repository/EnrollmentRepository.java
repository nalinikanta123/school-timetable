package cz.upce.unicorn.workshop.timetable.repository;

import cz.upce.unicorn.workshop.timetable.entity.Enrollment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface EnrollmentRepository extends AbstractRepository<Enrollment> {
}
