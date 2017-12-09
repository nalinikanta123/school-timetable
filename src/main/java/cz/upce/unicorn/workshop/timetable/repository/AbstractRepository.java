package cz.upce.unicorn.workshop.timetable.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface AbstractRepository<T> extends JpaRepository<T, Integer> {

    T findById(Integer id);
}
