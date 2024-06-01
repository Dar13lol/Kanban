import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'
import { LIST_TYPES } from "../../config";
import FormAddNewCard from '../forms/FormAddNewCard'
import FormSelect from '../forms/FormSelect'
import css from './List.module.css'

const List = props => {
    const {title, type, tasks, addNewTask, setTasks, index, allTasks } = props
    const [isFormVisible, setFormVisible] = useState(false)

    const handleClick = () => {
        setFormVisible(!isFormVisible)
    };
    const selectTasks = allTasks.filter(
        (task) => task.status === Object.values(LIST_TYPES)[index]
    );

    const formSubmit = (title, description) => {
        addNewTask(title, description);
        setFormVisible(false);
    };

    const delTask = (id) => {
        const findTask = allTasks.find((task) => task.id === id);
        if (findTask) {
          setTasks([...allTasks.filter((task) => task !== findTask)]);
        }
    };      

    const backlog =	allTasks.filter(obj => {return obj.status === LIST_TYPES.BACKLOG});
	const ready = allTasks.filter(obj => {return obj.status === LIST_TYPES.READY});
	const inProgress = allTasks.filter(obj => {return obj.status === LIST_TYPES.IN_PROGRESS});

    return(
        <div className={css.list}>
            <h2 className={css.listTitle}>{title}</h2>
            {tasks.map(task => {
                return(
                    <div className={css.wrapper}>
                        <Link to={`/tasks/${task.id}`} className={css.taskLink}>
                            <div key={task.id} className={css.task}>{task.title}</div>
                            
                        </Link>
                        <button className={css.buttonRemove} onClick={() => delTask(task.id)}>&#10006;</button>
                    </div>
                )
            })}
            
            {type === LIST_TYPES.BACKLOG && <button className={css.addButton} onClick={handleClick}  style={{ display: !isFormVisible ? "block" : "none" }}  >+ Add card</button>} 
            
            {type === LIST_TYPES.READY &&  <button  className={css.addButton}   onClick={handleClick} disabled= {backlog.length === 0 } style={{ display: !isFormVisible ? "block" : "none" }} >+ Add card</button>}

            {type === LIST_TYPES.IN_PROGRESS &&  <button  className={css.addButton} onClick={handleClick} disabled= {ready.length === 0 } style={{ display: !isFormVisible ? "block" : "none" }} >+ Add card</button>}
			
			{type === LIST_TYPES.FINISHED && <button  className={css.addButton}  onClick={handleClick} disabled= {inProgress.length === 0 } style={{ display: !isFormVisible ? "block" : "none" }} >+ Add card</button>}
            
            {type === LIST_TYPES.BACKLOG && isFormVisible && (
                <FormAddNewCard formSubmit={formSubmit} />
            )}

            {type !== LIST_TYPES.BACKLOG && isFormVisible && (
                <FormSelect 
                {...props}
                formSubmit={formSubmit} 
                type={type}
				tasks = {selectTasks} 
                setTasks={setTasks}
                setFormVisible = {setFormVisible}
				isFormVisible = {isFormVisible}
                 />
            )} 
            
        </div>
    )
}

export default List

//