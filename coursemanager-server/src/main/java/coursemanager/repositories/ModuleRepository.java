package coursemanager.repositories;

import coursemanager.models.Module;
import org.springframework.data
  .repository.CrudRepository;

public interface ModuleRepository
  extends CrudRepository<Module, Integer>{}
