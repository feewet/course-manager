let _singleton = Symbol();
const COURSE_API_URL = 'http://vagrant.local.com:9000/api/course'
class CourseService {
  constructor(singletonToken) {
    if (_singleton !== singletonToken)
    throw new Error('Cannot instantiate directly.');
  }

  static get instance() {
    if(!this[_singleton])
    this[_singleton] = new CourseService(_singleton);
    return this[_singleton]
  }

  // delete course given courseId
  deleteCourse(courseId) {
    return fetch(COURSE_API_URL + '/' + courseId,
    {
      method: 'DELETE'
    })
  }

  /*
  * Fetch list of courses
  */
  findAllCourses() {
    return fetch(COURSE_API_URL)
    .then(function(response){
      return response.json();
    });
  }
  /*
  * Create a new course
  */
  createCourse(course) {
    return fetch(COURSE_API_URL, {
      body: JSON.stringify(course),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }).then(function (response) {
      return response.json();
    })
  }
}
export default CourseService;
