package cz.upce.unicorn.workshop.timetable.repository;

import cz.upce.unicorn.workshop.timetable.entity.Classes;
import cz.upce.unicorn.workshop.timetable.entity.Course;
import cz.upce.unicorn.workshop.timetable.service.ServiceLocator;

import javax.persistence.EntityManager;
import java.util.List;

public class CourseRepositoryImpl extends AbstractRepositoryImpl<Course> implements CourseRepository {

    @Override
    public Course save(Course item) {
        Course result = null;
        EntityManager entityManager = ServiceLocator.createEntityManager();
        entityManager.getTransaction().begin();

        if (item.getId() == null) {
            result = entityManager.merge(item);
        } else {
            List<Classes> byCourseId = ServiceLocator.getClassesRepository().findByCourseId(item.getId());
            item.setClasses(byCourseId);
            result = entityManager.merge(item);
        }

        entityManager.getTransaction().commit();
        entityManager.close();
        return result;
    }

    @Override
    protected Class<Course> getClazz() {
        return Course.class;
    }
}
