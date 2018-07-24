import React from 'react';
import { Link } from 'react-router-dom'
import '../styles.css'

class LessonTab extends React.Component {
  render() {
    return (
      <tr>
        <td>
            {this.props.module.title}
        </td>
        <td>
          <button onClick={() =>
              {this.props.delete(this.props.lesson.id)}}>
              Delete
            </button>
          </td>
        </tr>
      )
    }
  }
  export default LessonTab;
