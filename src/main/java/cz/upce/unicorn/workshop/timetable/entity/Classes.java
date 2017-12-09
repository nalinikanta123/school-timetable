package cz.upce.unicorn.workshop.timetable.entity;

import cz.upce.unicorn.workshop.timetable.model.TimeEnum;
import lombok.Data;

import javax.persistence.*;
import java.sql.Time;
import java.time.DayOfWeek;
import java.util.List;

@Data
@Entity
@Table(name = "classes")
public class Classes  {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private Time time;

    @Enumerated(EnumType.STRING)
    private DayOfWeek dayOfWeek;
    
    private String room;

    @ManyToOne
    @JoinColumn(referencedColumnName = "id")
    private Course course;

    @OneToMany(mappedBy = "classes")
    private List<Enrollment> enrollments;
}
