const LESSON_API_URL =
  'http://vagrant.local.com:9000/api/course/CID/module/MID/lesson';
const LESSON_API_URL_SHORT =
  'http://vagrant.local.com:9000/api/lesson'

let _singleton = Symbol();
export default class LessonService {
  constructor(singletonToken) {
    if (_singleton !== singletonToken)
      throw new Error('Singleton!!!');
  }

  findAllLessonsForModule(courseId, moduleId) {
    return fetch(
      LESSON_API_URL
        .replace('CID', courseId)
        .replace('MID', moduleId))
      .then(function (response) {
        return response.json();
      })
  }

  createLesson(courseId, moduleId, lesson) {
    return fetch(LESSON_API_URL
      .replace('CID', courseId)
      .replace('MID', moduleId),
      {
        body: JSON.stringify(lesson),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST'
      }).then(function (response)
    { return response.json(); })
  }

  // delete lesson given moduleId
  deleteLesson(lessonId) {
    return fetch(LESSON_API_URL_SHORT + '/' + lessonId,
    {
      method: 'DELETE'
    })
  }

  findLessonById(lessonId) {
    return fetch(LESSON_API_URL_SHORT + '/' + lessonId),
    {
      method: 'GET'
    }
  }

  static get instance() {
    if(!this[_singleton])
      this[_singleton] = new LessonService(_singleton);
    return this[_singleton]
  }
}
