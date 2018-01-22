package cz.upce.unicorn.workshop.timetable.repository;

import cz.upce.unicorn.workshop.timetable.entity.Identifiable;

import java.util.List;

public interface AbstractRepository<T extends Identifiable> {

    T findById(Integer id);

    T save(T item);

    List<T> findAll();

    void delete(Integer id);

}
