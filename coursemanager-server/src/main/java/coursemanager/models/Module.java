package coursemanager.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;

@Entity
public class Module {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String title;
	@ManyToOne
	@JsonIgnore
	private Course course;

  public String getTitle() {
    return this.title;
  }

  public Course getCourse() {
    return this.course;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public void setCourse(Course course) {
    this.course = course;
  }
}
