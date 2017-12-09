package cz.upce.unicorn.workshop.timetable.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "student")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String firstName;

    private String surName;

//    @OneToMany(mappedBy = "student")
//    private List<Enrollment> enrollments;
}
