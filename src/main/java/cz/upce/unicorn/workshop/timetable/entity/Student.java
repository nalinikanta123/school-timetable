package cz.upce.unicorn.workshop.timetable.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "student")
@ToString(exclude = "enrollments")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String firstName;

    private String surName;

    @OneToMany(mappedBy = "student")
    @JsonIgnore
    private List<Enrollment> enrollments;
}
