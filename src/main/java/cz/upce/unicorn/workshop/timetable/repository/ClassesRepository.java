package cz.upce.unicorn.workshop.timetable.repository;

import cz.upce.unicorn.workshop.timetable.entity.Classes;
import cz.upce.unicorn.workshop.timetable.model.TimeEnum;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.time.DayOfWeek;
import java.util.List;

@RepositoryRestResource
public interface ClassesRepository extends AbstractRepository<Classes> {
    List<Classes> findByCourseId(Integer id);

    List<Classes> findByDayOfWeekAndTimeAndRoom(DayOfWeek dayOfWeek, TimeEnum timeEnum, String room);
}
