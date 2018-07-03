import React from 'react'
import ModuleService from '../../services/ModuleService'
export default class ModuleList extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.moduleService = ModuleService.instance;

    this.setModuleTitle = this.setModuleTitle.bind(this);
    this.setCourseId = this.setCourseId.bind(this);
    this.createModule = this.createModule.bind(this);

    this.state = {
      courseId: 1, module: {title: ''}
    };
  }
  componentDidMount() {
    console.log(this.props);
    this.setCourseId(this.props.courseId);
  }
  componentWillReceiveProps(newProps){
    this.setCourseId(newProps.courseId);
  }

  // store courseID in state
  setCourseId(courseId) {
    this.setState({courseId: courseId});
  }

  // store module title changes
  setModuleTitle(event) {
    this.setState({module: {
      title: event.target.value
    }})
  }

  // create module
  createModule() {
    console.log(this.state.courseId + ' ' + this.state.module)
    this.moduleService.createModule(this.state.courseId, this.state.module);
  }

  render() {
    return (
      <div>
        <h4>Modules courseId:{this.state.courseId}</h4>
        <input value={this.state.module.title}
          onChange={this.setModuleTitle}/>
        <button onClick={this.createModule}>Create</button>
      </div>
    )
  }
}
