package coursemanager.repositories;

import org.springframework.data.repository.CrudRepository;
import coursemanager.models.Course;

public interface CourseRepository
extends CrudRepository<Course, Integer> { }
