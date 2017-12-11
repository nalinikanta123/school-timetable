package cz.upce.unicorn.workshop.timetable.repository;

import cz.upce.unicorn.workshop.timetable.entity.Classes;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface ClassesRepository extends AbstractRepository<Classes> {
    List<Classes> findByCourseId(Integer id);
}
