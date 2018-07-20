import React from 'react'
import ModuleList from './ModuleList'
class CourseEditor extends React.Component {
  constructor(props) {
    super(props);
    this.selectCourse = this.selectCourse.bind(this);
    this.state = {courseId: '1'};
  }

  selectCourse(courseId) {
    this.setState({courseId: courseId})
  }

  conponentDidMount() {
    this.selectCourse
    (this.props.match.params.courseId)
  }

  componentWillReceiveProps(newProps) {
    this.selectCourse
    (newProps.match.params.courseId)
  }

  render() {
    return (
        <div>
          <h3>Edit Course {this.state.courseId}</h3>
          <ModuleList
            courseId={this.state.courseId}/>
        </div>
    )
  }
}
export default CourseEditor;
