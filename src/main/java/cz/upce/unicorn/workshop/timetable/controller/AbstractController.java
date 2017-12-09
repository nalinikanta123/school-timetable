package cz.upce.unicorn.workshop.timetable.controller;

import cz.upce.unicorn.workshop.timetable.repository.AbstractRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public abstract class AbstractController<T> {

    protected abstract AbstractRepository<T> getRepository();

    @RequestMapping(value = "", method = RequestMethod.GET)
    public List<T> students() {
        return getRepository().findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public T getStudentById(@PathVariable Integer id) {
        return getRepository().findById(id);
    }

    @RequestMapping(value = "", method = RequestMethod.POST)
    public T saveOrUpdateStudent(@RequestBody T student) {
        return getRepository().save(student);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteStudent(@PathVariable Integer id) {
        getRepository().delete(id);
    }
}
