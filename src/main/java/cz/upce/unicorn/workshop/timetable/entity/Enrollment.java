package cz.upce.unicorn.workshop.timetable.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "enrollment")
public class Enrollment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @ManyToOne
    @JoinColumn(referencedColumnName = "id")
    private Student student;

    @ManyToOne
    @JoinColumn(referencedColumnName = "id")
    private Classes classes;

}
