import React from 'react'
import ModuleService from '../services/ModuleService'
import ModuleRow from '../components/ModuleRow'
import ModuleEditor from '../containers/ModuleEditor'
import '../styles.css'
export default class ModuleList extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.moduleService = ModuleService.instance;

    this.setModuleTitle = this.setModuleTitle.bind(this);
    this.setCourseId = this.setCourseId.bind(this);
    this.createModule = this.createModule.bind(this);
    this.deleteModule = this.deleteModule.bind(this);
    this.findAllModules = this.findAllModules.bind(this);

    this.state = {
      courseId: props.courseId,
      module: {title: 'module'},
      modules: []
    };
  }

  componentDidMount() {
    console.log(this.props);
    this.setCourseId(this.props.courseId);
    this.findAllModules(this.props.couseId);
  }
  componentWillReceiveProps(newProps){
    this.setCourseId(newProps.courseId);
  }

  // store courseID in state
  setCourseId(courseId) {
    this.setState({courseId: courseId});
  }

  /*
  * Return all modules for a course
  */
  findAllModules() {
    this.moduleService.findAllModulesForCourse(this.state.courseId)
    .then((modules) => {
      this.setState({modules: modules});
    });
  }

  // store module title changes
  setModuleTitle(event) {
    this.setState({module: {
      title: event.target.value
    }})
  }

  // delete module
  deleteModule(moduleId) {
    console.log(this.moduleService)
    this.moduleService.deleteModule(moduleId)
    .then(() => { this.findAllModules(); });
  }
  /*
  * Create list of module row elements
  */
  moduleRows() {
    var rows = this.state.modules.map((module) => {
      return <ModuleRow key={module.id} module={module} courseId={this.state.courseId}
        delete={this.deleteModule}/>
    });
    return ( rows )
  }

  // create module
  createModule() {
    console.log(this.state.courseId + ' ' + this.state.module)
    this.moduleService
    .createModule(this.state.courseId, this.state.module)
    .then(() => {
      this.findAllModules()
    })
  }

  render() {
    return (
      <div>
        <div>
          <h4>Modules courseId:{this.state.courseId}</h4>
          <input value={this.state.module.title}
            onChange={this.setModuleTitle}/>
          <button onClick={this.createModule}>Create</button>
        </div>
        <div>
          <h2>Module List</h2>
          <table>
            <thead><tr><th>Title</th></tr></thead>
            <tbody>
              {this.moduleRows()}
            </tbody>
          </table>
        </div>
        <div id= 'module-editor'>
          <ModuleEditor key = {this.state.module.id}
            courseId = {this.state.courseId}
            moduleId = {this.state.module.id}/>
        </div>
      </div>
    )
  }
}
