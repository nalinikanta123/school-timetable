package cz.upce.unicorn.workshop.timetable.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import cz.upce.unicorn.workshop.timetable.model.TimeEnum;
import lombok.Data;
import lombok.ToString;

import javax.persistence.*;
import java.sql.Time;
import java.time.DayOfWeek;
import java.util.List;

@Data
@Entity
@Table(name = "classes")
@ToString(exclude = {"course","enrollments"})
public class Classes  {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Enumerated(EnumType.ORDINAL)
    private TimeEnum time;

    @Enumerated(EnumType.STRING)
    private DayOfWeek dayOfWeek;
    
    private String room;

    @ManyToOne
    @JoinColumn(referencedColumnName = "id")
//    @JsonManagedReference
    @JsonIgnore
    private Course course;

    @OneToMany(mappedBy = "classes")
    @JsonIgnore
    private List<Enrollment> enrollments;
}
