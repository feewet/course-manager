import React from 'react';
import { Link } from 'react-router-dom'
import '../styles.css'

class ModuleRow extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <Link to=
            {`/edit/course/${this.props.courseId}
            /module/${this.props.module.id}/`}>
            {this.props.module.title}
          </Link>
        </td>
        <td>
          <button onClick={() =>
              {this.props.delete(this.props.module.id)}}>
              Delete
            </button>
          </td>
        </tr>
      )
    }
  }
  export default ModuleRow;
