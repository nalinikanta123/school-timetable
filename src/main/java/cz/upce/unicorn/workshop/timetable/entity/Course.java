package cz.upce.unicorn.workshop.timetable.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "course")
public class Course  {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String shortName;

    private String fullName;

    @Column(columnDefinition = "TEXT")
    private String syllabus;

    @OneToMany(mappedBy = "course")
    private List<Classes> classes;


}
