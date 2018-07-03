package coursemanager.models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.Date;
import javax.persistence.*;
import java.util.Set;

@Entity
public class Course {
	@OneToMany(mappedBy="course")
	@JsonIgnore
  private Set<Module> modules;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
  private String title;
  @Temporal(TemporalType.TIMESTAMP)
	private Date created;
	@Temporal(TemporalType.TIMESTAMP)
	private Date modified;

  public int getId() {
    return this.id;
  }
  public String getTitle() {
    return this.title;
  }
  public Date getCreated() {
    return this.created;
  }
  public Date getModified() {
    return this.modified;
  }

  public void setId(int id) {
    this.id = id;
  }
  public void setTitle(String title) {
    this.title = title;
  }
  public void setCreated(Date created) {
    this.created = created;
  }
  public void setModified(Date modified) {
    this.modified = modified;
  }
}
