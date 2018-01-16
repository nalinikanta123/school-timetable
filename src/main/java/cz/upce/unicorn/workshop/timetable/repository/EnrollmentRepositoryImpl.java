package cz.upce.unicorn.workshop.timetable.repository;

import cz.upce.unicorn.workshop.timetable.entity.Classes;
import cz.upce.unicorn.workshop.timetable.entity.Enrollment;
import cz.upce.unicorn.workshop.timetable.entity.Student;
import cz.upce.unicorn.workshop.timetable.service.ServiceLocator;

import javax.persistence.EntityManager;
import javax.persistence.criteria.*;
import java.util.ArrayList;
import java.util.List;

public class EnrollmentRepositoryImpl extends AbstractRepositoryImpl<Enrollment> implements EnrollmentRepository {
    @Override
    public List<Enrollment> findEnrollmentByClassesId(Integer id) {
        EntityManager entityManager = ServiceLocator.createEntityManager();
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Enrollment> cq = cb.createQuery(getClazz());

        Root<Enrollment> root = cq.from(getClazz());
        Join<Enrollment, Classes> join = root.join("classes");

        List<Predicate> predicates = new ArrayList<Predicate>();
        predicates.add(cb.equal(join.get("id"), id));

        cq.select(root).where(predicates.toArray(new Predicate[]{}));
        return entityManager.createQuery(cq).getResultList();
    }

    @Override
    public List<Enrollment> findEnrollmentByStudentId(Integer id) {
        EntityManager entityManager = ServiceLocator.createEntityManager();
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Enrollment> cq = cb.createQuery(getClazz());

        Root<Enrollment> root = cq.from(getClazz());
        Join<Enrollment, Student> join = root.join("student");

        List<Predicate> predicates = new ArrayList<Predicate>();
        predicates.add(cb.equal(join.get("id"), id));

        cq.select(root).where(predicates.toArray(new Predicate[]{}));
        return entityManager.createQuery(cq).getResultList();
    }

    @Override
    public List<Enrollment> findEnrollmentsByClassesIdAndStudentId(Integer classesId, Integer studentId) {
        EntityManager entityManager = ServiceLocator.createEntityManager();
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Enrollment> cq = cb.createQuery(getClazz());

        Root<Enrollment> root = cq.from(getClazz());
        Join<Enrollment, Student> joinS = root.join("student");
        Join<Enrollment, Classes> joinC = root.join("classes");

        List<Predicate> predicates = new ArrayList<Predicate>();
        predicates.add(cb.equal(joinS.get("id"), studentId));
        predicates.add(cb.equal(joinC.get("id"), classesId));

        cq.select(root).where(predicates.toArray(new Predicate[]{}));
        return entityManager.createQuery(cq).getResultList();
    }

    @Override
    protected Class<Enrollment> getClazz() {
        return Enrollment.class;
    }
}
