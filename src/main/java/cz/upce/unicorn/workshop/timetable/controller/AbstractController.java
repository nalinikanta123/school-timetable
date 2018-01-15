package cz.upce.unicorn.workshop.timetable.controller;

import cz.upce.unicorn.workshop.timetable.entity.Identifiable;
import cz.upce.unicorn.workshop.timetable.repository.AbstractRepository;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

public abstract class AbstractController<T extends Identifiable> {

    protected abstract AbstractRepository<T> getRepository();

    @RequestMapping(value = "", method = RequestMethod.GET)
    public List<T> getAll() {
        return getRepository().findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public T getById(@PathVariable Integer id) {
        return getRepository().findById(id);
    }

    @RequestMapping(value = "", method = {RequestMethod.POST, RequestMethod.PUT})
    public T saveOrUpdate(@RequestBody T item) {
        return getRepository().save(item);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Integer id) {
        getRepository().delete(id);
    }
}
