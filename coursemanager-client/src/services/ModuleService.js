let _singleton = Symbol();
const MODULE_API_URL =
  'http://vagrant.local.com:9000/api/course/CID/module';
  const MODULE_API_URL_SHORT =
  'http://vagrant.local.com:9000/api/module'

class ModuleService {
  constructor(singletonToken) {
    if (_singleton !== singletonToken)
      throw new Error('Singleton!!!');
  }

  findAllModulesForCourse(courseId) {
    return fetch(
      MODULE_API_URL
        .replace('CID', courseId))
      .then(function (response) {
        return response.json();
      })
  }

  createModule(courseId, module) {
    return fetch(MODULE_API_URL.replace('CID', courseId),
      {
        body: JSON.stringify(module),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST'
      }).then(function (response)
    { return response.json(); })
  }

  // delete course given moduleId
  deleteModule(moduleId) {
    return fetch(MODULE_API_URL_SHORT + '/' + moduleId,
    {
      method: 'DELETE'
    })
  }

  static get instance() {
    if(!this[_singleton])
      this[_singleton] = new ModuleService(_singleton);
    return this[_singleton]
  }
}
export default ModuleService;
