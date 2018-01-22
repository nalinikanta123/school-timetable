package cz.upce.unicorn.workshop.timetable.service;

import cz.upce.unicorn.workshop.timetable.repository.*;
import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class ServiceLocator {

    private static final String PERSISTENCE_UNIT_NAME = "timetable";

    private static StandardServiceRegistry registry;
    private static SessionFactory sessionFactory;
    private static EntityManagerFactory entityManagerFactory;
    private static ClassesRepository classesRepository;
    private static CourseRepository courseRepository;
    private static EnrollmentRepository enrollmentRepository;
    private static StudentRepository studentRepository;

    private ServiceLocator() {

    }

    public static StudentRepository getStudentRepository() {
        if (studentRepository == null) {
            studentRepository = new StudentRepositoryImpl();
        }
        return studentRepository;
    }

    public static EnrollmentRepository getEnrollmentRepository() {
        if (enrollmentRepository == null) {
            enrollmentRepository = new EnrollmentRepositoryImpl();
        }
        return enrollmentRepository;
    }

    public static CourseRepository getCourseRepository() {
        if (courseRepository == null) {
            courseRepository = new CourseRepositoryImpl();
        }
        return courseRepository;
    }

    public static ClassesRepository getClassesRepository() {
        if (classesRepository == null) {
            classesRepository = new ClassesRepositoryImpl();
        }
        return classesRepository;
    }

    public static EntityManager createEntityManager() {
        return getEntityManagerFactory().createEntityManager();
    }

    public static EntityManagerFactory getEntityManagerFactory() {
        if (entityManagerFactory == null) {
            entityManagerFactory = Persistence.createEntityManagerFactory(PERSISTENCE_UNIT_NAME);
        }
        return entityManagerFactory;
    }


    public static void shutdown() {
        if (registry != null) {
            StandardServiceRegistryBuilder.destroy(registry);
        }

        if (entityManagerFactory != null) {
            entityManagerFactory.close();
        }
    }
}
