package coursemanager.repositories;

import org.springframework.data.repository.CrudRepository;

import coursemanager.models.Lesson;

public interface LessonRepository extends CrudRepository<Lesson, Integer> {

}
