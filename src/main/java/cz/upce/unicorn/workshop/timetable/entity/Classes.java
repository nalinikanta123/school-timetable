package cz.upce.unicorn.workshop.timetable.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import cz.upce.unicorn.workshop.timetable.model.TimeEnum;
import lombok.Data;
import lombok.ToString;

import javax.persistence.*;
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

    @Column(name = "time")
    @Enumerated(EnumType.ORDINAL)
    private TimeEnum time;

    @Column(name = "day_of_week", length = 15)
    @Enumerated(EnumType.STRING)
    private DayOfWeek dayOfWeek;

    @Column(name = "room", length = 20)
    private String room;

    @Column(name = "lecturer_name", length = 70)
    private String lecturerName;

    @ManyToOne
    @JoinColumn(name = "course_id", referencedColumnName = "id")
//    @JsonManagedReference
//    @JsonIgnore
    private Course course;

    @OneToMany(mappedBy = "classes")
    @JsonIgnore
    private List<Enrollment> enrollments;
}
