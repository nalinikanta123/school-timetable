package cz.upce.unicorn.workshop.timetable.controller;

import cz.upce.unicorn.workshop.timetable.entity.Student;
import cz.upce.unicorn.workshop.timetable.repository.AbstractRepository;
import cz.upce.unicorn.workshop.timetable.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.stream.Collectors;

@RestController
@RequestMapping("student")
public class StudentController extends AbstractController<Student> {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    protected AbstractRepository<Student> getRepository() {
        return studentRepository;
    }
}
