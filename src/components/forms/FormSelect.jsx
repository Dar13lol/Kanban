import React from "react";
import { LIST_TYPES } from "../../config";
import css from './Form.module.css'


const FormSelect = props => {
    const { tasks, type, setTasks, allTasks } = props
    
    const handleSubmit = e => {
        e.preventDefault()
        
    }

    const handleChange = (e) => {
        const updatedTask = allTasks.map((task) => {
          if (task.id === e.target.value) {
            return { ...task, status: type };
          }
          return task;
        });
        setTasks(updatedTask);
        
      };
    
    return (
        <form className={css.form} onSubmit={handleSubmit}  >
            {
            Object.values(LIST_TYPES).indexOf(type) > 0 && (
                <select key={tasks} onChange={handleChange}  className={css.select} >
                    <option className={css.option} >Select Task</option>
                    
                    {tasks
                        .filter(task => Object.values(LIST_TYPES).indexOf(task.status) < Object.values(LIST_TYPES).indexOf(type))
                        .map(task => (
                            <option className={css.option} key={task.id} value={task.id} >{task.title} </option>
                        ))
                        }
                </select>
            )}
        
       </form>
   
    )
}

export default FormSelect

