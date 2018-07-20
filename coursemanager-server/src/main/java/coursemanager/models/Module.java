package coursemanager.models;

import java.util.Set;
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
	@OneToMany(mappedBy="module")
	@JsonIgnore
	private Set<Lesson> lessons;

	public Set<Lesson> getLessons() {
		return this.lessons;
	}
	public void setLessons(Set<Lesson> lessons) {
		this.lessons = lessons;
	}
	public String getTitle() {
		return this.title;
	}

	public Course getCourse() {
		return this.course;
	}

	public int getId() {
		return id;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public void setCourse(Course course) {
		this.course = course;
	}

	public void setId(int id) {
		this.id = id;
	}
}
