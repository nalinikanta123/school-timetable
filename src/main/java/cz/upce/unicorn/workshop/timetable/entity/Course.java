package cz.upce.unicorn.workshop.timetable.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "course")
@ToString(exclude = {"classes"})
public class Course  {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String shortName;

    private String fullName;

    @Column(columnDefinition = "TEXT")
    private String syllabus;

    @OneToMany(mappedBy = "course")
//    @JsonBackReference
    @JsonIgnore
    private List<Classes> classes;


}
