package cz.upce.unicorn.workshop.timetable.controller;

import cz.upce.unicorn.workshop.timetable.entity.Student;
import cz.upce.unicorn.workshop.timetable.repository.AbstractRepository;
import cz.upce.unicorn.workshop.timetable.repository.StudentRepository;
import cz.upce.unicorn.workshop.timetable.service.ServiceLocator;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("student")
public class StudentController extends AbstractController<Student> {

    private StudentRepository studentRepository = ServiceLocator.getStudentRepository();

    @Override
    protected AbstractRepository<Student> getRepository() {
        return studentRepository;
    }

    @Override
    public void delete(@PathVariable Integer id) {
        Student byId = studentRepository.findById(id);
        if (byId != null) {
            byId.setIsActive(false);
            studentRepository.saveAndFlush(byId);
        }
    }
}
