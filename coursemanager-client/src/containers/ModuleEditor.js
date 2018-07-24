import React from 'react'
import LessonTabs from './LessonTabs'
class ModuleEditor extends React.Component {
  constructor(props) {
    super(props);
    this.selectModule = this.selectModule.bind(this);
    this.setCourseId = this.setCourseId.bind(this);
    this.state = {
      moduleId: props.moduleId,
      courseId: props.courseId
    };
  }

  selectModule(moduleId) {
    this.setState({moduleId: moduleId})
  }

  setCourseId(courseId) {
    this.setState({courseId: courseId})
  }

  conponentDidMount() {
    this.selectModule(this.props.match.params.moduleId)
    this.setCourseId(this.props.match.params.courseId)
  }

  componentWillReceiveProps(newProps) {
    this.selectModule(newProps.moduleId)
    this.setCourseId(newProps.courseId)
  }

  render() {
    return (
        <div>
          <h3>Edit Module {this.state.moduleId}</h3>
          <LessonTabs
            moduleId={this.state.moduleId}
            courseId={this.state.courseId}/>
        </div>
    )
  }
}
export default ModuleEditor;
