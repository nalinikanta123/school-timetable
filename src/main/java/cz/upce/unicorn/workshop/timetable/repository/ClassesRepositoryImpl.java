package cz.upce.unicorn.workshop.timetable.repository;

import cz.upce.unicorn.workshop.timetable.entity.Classes;
import cz.upce.unicorn.workshop.timetable.model.TimeEnum;

import java.time.DayOfWeek;
import java.util.List;

public class ClassesRepositoryImpl extends AbstractRepositoryImpl<Classes> implements ClassesRepository {
    @Override
    public List<Classes> findByCourseId(Integer id) {
        return null;
    }

    @Override
    public List<Classes> findByDayOfWeekAndTimeAndRoom(DayOfWeek dayOfWeek, TimeEnum timeEnum, String room) {
        return null;
    }

    @Override
    protected Class<Classes> getClazz() {
        return Classes.class;
    }
}
