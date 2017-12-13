package cz.upce.unicorn.workshop.timetable.controller;

import cz.upce.unicorn.workshop.timetable.entity.Classes;
import cz.upce.unicorn.workshop.timetable.repository.AbstractRepository;
import cz.upce.unicorn.workshop.timetable.repository.ClassesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("classes")
public class ClassesController extends AbstractController<Classes> {

    @Autowired
    private ClassesRepository classesRepository;

    @Override
    protected AbstractRepository<Classes> getRepository() {
        return classesRepository;
    }

    @RequestMapping(value = "/course/{id}", method = RequestMethod.GET)
    public List<Classes> getClassesByCourse(@PathVariable Integer id) {
        return classesRepository.findByCourseId(id);
    }

    @Override
    public Classes saveOrUpdate(@RequestBody Classes item) {
        List<Classes> classes = getByDayOfWeekAndTimeAndRoom(item);
        if (classes.isEmpty() || (item.getId() != null && classes.size() == 1 && classes.get(0).getId().equals(item.getId()))) {
            return classesRepository.save(item);
        } else {
            return null;
        }
    }

    private List<Classes> getByDayOfWeekAndTimeAndRoom(Classes item) {
        return classesRepository.findByDayOfWeekAndTimeAndRoom(item.getDayOfWeek(), item.getTime(), item.getRoom());
    }
}
