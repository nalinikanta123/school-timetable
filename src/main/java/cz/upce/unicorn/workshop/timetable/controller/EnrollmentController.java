package cz.upce.unicorn.workshop.timetable.controller;

import cz.upce.unicorn.workshop.timetable.entity.Enrollment;
import cz.upce.unicorn.workshop.timetable.repository.AbstractRepository;
import cz.upce.unicorn.workshop.timetable.repository.EnrollmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("enrollment")
public class EnrollmentController extends AbstractController<Enrollment> {

    @Autowired
    private EnrollmentRepository enrollmentRepository;

    @Override
    protected AbstractRepository<Enrollment> getRepository() {
        return enrollmentRepository;
    }

    @RequestMapping(value = "/classes/{id}")
    public List<Enrollment> findEnrollmentsByEnrolledClassId(@PathVariable Integer id) {
        return enrollmentRepository.findEnrollmentByClassesId(id);
    }
}
