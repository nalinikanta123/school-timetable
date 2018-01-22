package cz.upce.unicorn.workshop.timetable.repository;

import cz.upce.unicorn.workshop.timetable.entity.Classes;
import cz.upce.unicorn.workshop.timetable.entity.Course;
import cz.upce.unicorn.workshop.timetable.entity.Enrollment;
import cz.upce.unicorn.workshop.timetable.model.TimeEnum;
import cz.upce.unicorn.workshop.timetable.service.ServiceLocator;

import javax.persistence.EntityManager;
import javax.persistence.criteria.*;
import java.time.DayOfWeek;
import java.util.ArrayList;
import java.util.List;

public class ClassesRepositoryImpl extends AbstractRepositoryImpl<Classes> implements ClassesRepository {
    @Override
    public List<Classes> findByCourseId(Integer id) {
        EntityManager entityManager = ServiceLocator.createEntityManager();
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Classes> cq = cb.createQuery(getClazz());

        Root<Classes> root = cq.from(getClazz());
        Join<Classes, Course> join = root.join("course");

        List<Predicate> predicates = new ArrayList<Predicate>();
        predicates.add(cb.equal(join.get("id"), id));

        cq.select(root).where(predicates.toArray(new Predicate[]{}));
        return entityManager.createQuery(cq).getResultList();
    }

    @Override
    public List<Classes> findByDayOfWeekAndTimeAndRoom(DayOfWeek dayOfWeek, TimeEnum timeEnum, String room) { //todo not tested yes
        EntityManager entityManager = ServiceLocator.createEntityManager();

        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Classes> cq = cb.createQuery(getClazz());

        Root<Classes> root = cq.from(getClazz());
        List<Predicate> predicates = new ArrayList<Predicate>();


        predicates.add(cb.equal(root.get("dayOfWeek"), dayOfWeek));
        predicates.add(cb.equal(root.get("time"), timeEnum));
        predicates.add(cb.equal(root.get("room"), room));

        cq.select(root).where(predicates.toArray(new Predicate[]{}));

        return entityManager.createQuery(cq).getResultList();
    }

    @Override
    public Classes save(Classes item) {
        Classes result = null;
        EntityManager entityManager = ServiceLocator.createEntityManager();
        entityManager.getTransaction().begin();

        if (item.getId() == null) {
            result = entityManager.merge(item);
        } else {
            List<Enrollment> byCourseId = ServiceLocator.getEnrollmentRepository().findEnrollmentByClassesId(item.getId());
            item.setEnrollments(byCourseId);
            result = entityManager.merge(item);
        }

        entityManager.getTransaction().commit();
        entityManager.close();
        return result;
    }

    @Override
    protected Class<Classes> getClazz() {
        return Classes.class;
    }
}
