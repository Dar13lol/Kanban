import React from "react";
import uniqid from 'uniqid';
import { LIST_TYPES, LIST_COPY } from "../../config";
import List from '../list/List'
import css from './Board.module.css'

const Board = props => {
    const {tasks, setTasks} = props

    const addNewTask = (title, description) => {
        const newTask = {
            id: uniqid(),
            title: title,
            description: description,
            created: new Date().toISOString(),
            status: LIST_TYPES.BACKLOG,
        }
        setTasks([...tasks, newTask])
    }

    return(
        <div className={css.board}>
            {
            Object.values(LIST_TYPES).map((type, index) => {
                const listTasks = tasks.filter((task) => task.status === type)
                return(
                    <List
                    key={type}
                    type={type} 
                    index={index - 1}
                    title={LIST_COPY[type]}
                    allTasks={tasks} 
                    tasks={listTasks || []} 
                    addNewTask={addNewTask}
                    setTasks={setTasks} />
                )
            })
            }
        </div>
    )
}

export default Board
