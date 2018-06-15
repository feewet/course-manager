import React from 'react';
import CourseRow from './CourseRow';
import CourseService from '../services/CourseService';

class CourseList extends React.Component {
  constructor() {
    super();
    this.courseService = CourseService.instance;
    this.state = {courses: []};
  }

  componentDidMount() {
   this.courseService.findAllCourses()
       .then((courses) => {
           this.setState({courses: courses});
  })}

  courseRows() {
    var rows = this.state.courses.map(function(course) {
      return <CourseRow course={course}/>
   });
   return ( rows )
  }

  render() {
    return (
      <div>
        <h2>Course List</h2>
        <table>
          <thead><tr><th>Title</th></tr></thead>
            <tbody>
              {this.courseRows()}
            </tbody>
        </table>
      </div>
    )
  }
}
export default CourseList;
