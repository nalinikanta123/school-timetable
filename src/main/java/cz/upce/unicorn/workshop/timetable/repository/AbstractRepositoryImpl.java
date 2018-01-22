package cz.upce.unicorn.workshop.timetable.repository;

import cz.upce.unicorn.workshop.timetable.entity.Identifiable;
import cz.upce.unicorn.workshop.timetable.service.ServiceLocator;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

public abstract class AbstractRepositoryImpl<T extends Identifiable> implements AbstractRepository<T> {

    protected abstract Class<T> getClazz();

    @Override
    public T findById(Integer id) {
        return ServiceLocator.createEntityManager().find(getClazz(), id);
    }

    @Override
    public T save(T item) {
        T result = null;
        EntityManager entityManager = ServiceLocator.createEntityManager();
        entityManager.getTransaction().begin();

        if (item.getId() == null) {
            result = entityManager.merge(item);
        } else {
            result = entityManager.merge(item);
        }

        entityManager.getTransaction().commit();
        entityManager.close();
        return result;
    }

    @Override
    public List<T> findAll() {
        EntityManager entityManager = ServiceLocator.createEntityManager();

        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<T> cq = cb.createQuery(getClazz());

        Root<T> root = cq.from(getClazz());


        List<Predicate> predicates = new ArrayList<Predicate>();
        cq.select(root).where(predicates.toArray(new Predicate[]{}));

        return entityManager.createQuery(cq).getResultList();
    }

    @Override
    public void delete(Integer id) {
        EntityManager entityManager = ServiceLocator.createEntityManager();
        entityManager.getTransaction().begin();
        T entity = entityManager.find(getClazz(), id);
        entityManager.remove(entityManager.contains(entity) ? entity : entityManager.merge(entity));
        entityManager.getTransaction().commit();
        entityManager.close();

    }


}
