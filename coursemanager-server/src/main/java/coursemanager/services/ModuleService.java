package coursemanager.services;

import coursemanager.models.Course;
import java.util.Optional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import coursemanager.models.Module;
import org.springframework.web.bind.annotation.PostMapping;
import coursemanager.repositories.ModuleRepository;
import coursemanager.repositories.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class ModuleService {
  @Autowired
  CourseRepository courseRepository;
  @Autowired
  ModuleRepository moduleRepository;

  /**
   * Creates a new module
   * @param "/api/course/{courseId}/module" POST format
   */
  @PostMapping("/api/course/{courseId}/module")
  public Module createModule(
  @PathVariable("courseId") int courseId,
  @RequestBody Module newModule) {
    Optional<Course> data = courseRepository.findById(courseId);
    System.out.println(courseId);
    if(data.isPresent()) {
      Course course = data.get();
      System.out.println("success");
      System.out.println(course.getTitle());
      newModule.setCourse(course);
      return moduleRepository.save(newModule);
    }
    return null;
  }

}
