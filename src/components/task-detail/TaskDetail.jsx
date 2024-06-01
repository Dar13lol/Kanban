import React from "react";
import { useState } from 'react'
import { useRouteMatch, Link } from 'react-router-dom';
import css from './TaskDetail.module.css'

const TaskDetail = props => {
    const match = useRouteMatch()
    const {taskId} = match.params
    const {tasks, setTasks} = props
    const [isEdit, setIsEdit] = useState(false);
    const task = tasks.find(task => task.id === taskId)

    let elem;
    if (!isEdit) {
      elem = <p className={css.text} onClick={(e) => setIsEdit(true)}>{task.description || 'This task has no description' }</p>
    } else {

      elem = <textarea 
		    className={css.textArea}
		    name="description"
			value={task.description}
			onChange={event => setTasks(tasks.map(task => task.id === taskId ? {...task, [event.target.name]: event.target.value} : task
			))}
			onBlur={() => setIsEdit(false)}/>;
    }


    return (
        <div className={css.wrapper}>
        {task ? (
          <>
            <header className={css.header}>
                <h2 className={css.title}>{task.title}</h2>
                <Link to='/' className={css.homeLink} >&#10006;</Link>
            </header>
            <p 
             
            className={css.text}              
             >
              Description: {elem}
              </p>
          </>
        ) : (
          <header className={css.header}>
            <h2>Task with ID{taskId} not found</h2>
            <Link to='/' className={css.homeLink}>&#10006;</Link>
          </header>
        )}
        </div>
    )
}

export default TaskDetail

//<button className={css.btnEdit}>Edit description</button>