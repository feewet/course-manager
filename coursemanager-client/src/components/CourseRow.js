import React from 'react';
import { Link } from 'react-router-dom'
import '../styles.css'

class CourseRow extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <Link to=
            {`/edit/course/${this.props.course.id}/`}>
            {this.props.course.title}
          </Link>
        </td>
        <td>
          <button onClick={() =>
              {this.props.delete(this.props.course.id)}}>
              Delete
            </button>
          </td>
        </tr>
      )
    }
  }
  export default CourseRow;
