import React from 'react';
import CourseRow from './CourseRow';
import CourseService from '../services/CourseService';

class CourseList extends React.Component {
  constructor() {
    super();
    this.courseService = CourseService.instance;
    this.titleChanged = this.titleChanged.bind(this);
    this.createCourse = this.createCourse.bind(this);
    this.deleteCourse = this.deleteCourse.bind(this);
    this.state = {courses: []};
  }

  // on component mount, find all courses
  componentDidMount() {
    this.findAllCourses();
  }

  // delete course
  deleteCourse(courseId) {
    this.courseService.deleteCourse(courseId)
    .then(() => { this.findAllCourses(); });
  }

  /*
  * Return all courses
  */
  findAllCourses() {
    this.courseService.findAllCourses()
    .then((courses) => {
      this.setState({courses: courses});
    });
  }
  /*
  * Create a new Course
  */
  createCourse() {
    this.courseService
    .createCourse(this.state.course)
    .then(() => {
      this.findAllCourses()

    })
  }

  /*
   * Create list of course row elements
   */
  courseRows() {
    var rows = this.state.courses.map((course) => {
      return <CourseRow key={course.id} course={course}
              delete={this.deleteCourse}/>
    });
    return ( rows )
  }

  /*
   *
   */
  titleChanged(event) {
    this.setState({
      course: { title: event.target.value }
    });
  }

  // render html
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr><th>Title</th></tr>
            <tr>
              <th><input onChange={this.titleChanged} placeholder="cs101"/></th>
              <th><button onClick={this.createCourse}>Add</button></th>
            </tr>
          </thead>
        </table>
          <div>
            <h2>Course List</h2>
            <table>
              <thead><tr><th>Title</th></tr></thead>
              <tbody>
                {this.courseRows()}
              </tbody>
            </table>
          </div>
        </div>
      )
    }
  }
  export default CourseList;
