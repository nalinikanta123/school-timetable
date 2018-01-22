package cz.upce.unicorn.workshop.timetable.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "course")
@ToString(exclude = {"classes"})
public class Course implements Identifiable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "short_name", length = 127)
    private String shortName;

    @Column(name = "full_name", length = 127)
    private String fullName;

    @Column(name = "syllabus", columnDefinition = "TEXT")
    private String syllabus;

    @OneToMany(mappedBy = "course", orphanRemoval = true)
    @JsonIgnore
    private List<Classes> classes;


}
