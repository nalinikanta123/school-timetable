package cz.upce.unicorn.workshop.timetable.controller;

import cz.upce.unicorn.workshop.timetable.entity.Course;
import cz.upce.unicorn.workshop.timetable.repository.AbstractRepository;
import cz.upce.unicorn.workshop.timetable.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("course")
public class CourseController extends AbstractController<Course> {

    @Autowired
    private CourseRepository courseRepository;

    @Override
    protected AbstractRepository<Course> getRepository() {
        return courseRepository;
    }
}
