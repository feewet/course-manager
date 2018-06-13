package coursemanager.services;

import coursemanager.models.Course;
import coursemanager.repositories.CourseRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CourseServices {
	@Autowired
	CourseRepository courseRepository;
	@GetMapping("/api/course")
	public Iterable<Course> findAllCourses() {
		return courseRepository.findAll();
	}
}
