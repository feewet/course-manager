import '../styles.css'
import React from 'react'
import LessonService from '../services/LessonService'
import LessonTab from '../components/LessonTab'

export default class LessonTabs extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.lessonService = LessonService.instance;

    this.setCourseId = this.setCourseId.bind(this);
    this.setModuleId = this.setModuleId.bind(this);
    this.createLesson = this.createLesson.bind(this);
    this.deleteLesson = this.deleteLesson.bind(this);
    this.findAllLessons = this.findAllLessons.bind(this);
    this.lessonTabs = this.lessonTabs.bind(this)

    this.state = {
      moduleId: props.moduleId,
      courseId: props.courseId,
      lesson: {title: 'lesson'},
      lessons: []
    };
  }

  componentDidMount() {
    this.setModuleId(this.props.moduleId);
    this.findAllLessons(this.props.lessonId);
  }
  componentWillReceiveProps(newProps){
    this.setModuleId(newProps.moduleId);
  }

  // store moduleId in state
  setModuleId(moduleId) {
    this.setState({moduleId: moduleId});
  }

  // store courseId in state
  setCourseId(courseId) {
    this.setState({courseId: courseId});
  }

  /*
  * Return all lessons for a module
  */
  findAllLessons() {
    this.lessonService.findAllLessonsForModule(
      this.state.courseId, this.state.moduleId)
    .then((lessons) => {
      console.log(lessons)
      this.setState({lessons: lessons});
    });
  }

  // store module title changes
  setModuleTitle(event) {
    this.setState({module: {
      title: event.target.value
    }})
  }

  // delete module
  deleteLesson(lessonId) {
    this.lessonService.deleteLesson(lessonId)
    .then(() => { this.findAllLessons(); });
  }
  /*
  * Create list of module row elements
  */
  lessonTabs() {
    console.log(this.state.lessons)
    var rows = this.state.lessons.map((lesson) => {
      return <LessonTab key={lesson.id} lesson={lesson} moduleId={this.state.moduleId}
        delete={this.deleteLeson}/>
    });
    return ( rows )
  }

  // create module
  createLesson() {
    this.lessonService
    .createLesson(this.state.moduleId, this.state.lesson)
    .then(() => {
      this.findAllLessons()
    })
  }

  render() {
    return (
      <div>
        <div>
          <h4>Lessons moduleId:{this.state.moduleId}</h4>
          <input value={this.state.lesson.title}
            onChange={this.setLessonTitle}/>
          <button onClick={this.createLesson}>Create</button>
        </div>
        <div>
          <h2>Lesson Tabs</h2>
          <table>
            <thead><tr><th>Title</th></tr></thead>
            <tbody>
              {this.lessonTabs()}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
