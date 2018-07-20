package coursemanager.services;
import coursemanager.models.Course;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import coursemanager.repositories.CourseRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class CourseServices {
	/**
	* Return a list of all courses
	*/
	@Autowired
	CourseRepository courseRepository;
	
	@GetMapping("/api/course")
	public Iterable<Course> findAllCourses() {
		return courseRepository.findAll();
	}
	/**
	* Create a new course
	*/
	@PostMapping("/api/course")
	public Course createCourse(@RequestBody Course course) {
		return courseRepository.save(course);
	}
	/**
	* De;ete a course given courseId
	*/
	@DeleteMapping("/api/course/{courseId}")
	public void deleteCourse(
	@PathVariable("courseId") int id) {
		courseRepository.deleteById(id);
	}
}
