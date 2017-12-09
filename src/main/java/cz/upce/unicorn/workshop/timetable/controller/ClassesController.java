package cz.upce.unicorn.workshop.timetable.controller;

import cz.upce.unicorn.workshop.timetable.entity.Classes;
import cz.upce.unicorn.workshop.timetable.repository.AbstractRepository;
import cz.upce.unicorn.workshop.timetable.repository.ClassesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("classes")
public class ClassesController extends AbstractController<Classes> {

    @Autowired
    private ClassesRepository classesRepository;

    @Override
    protected AbstractRepository<Classes> getRepository() {
        return classesRepository;
    }
}
