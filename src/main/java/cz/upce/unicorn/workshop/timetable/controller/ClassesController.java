package cz.upce.unicorn.workshop.timetable.controller;

import cz.upce.unicorn.workshop.timetable.entity.Classes;
import cz.upce.unicorn.workshop.timetable.repository.AbstractRepository;
import cz.upce.unicorn.workshop.timetable.repository.ClassesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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
    public Classes saveOrUpdate(Classes item) {
        if (classesRepository.findByDayOfWeekAndTimeAndRoom(item.getDayOfWeek(), item.getTime(), item.getRoom()).isEmpty()) {
            return classesRepository.save(item);
        } else {
            return null;
        }
    }
}
