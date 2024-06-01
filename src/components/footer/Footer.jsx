import React from 'react'
import css from './Footer.module.css'

const Footer = props => {
	const {tasks} = props
	const activeTaskCount = tasks.filter((task) => task.status !== 'finished');
  const finishedTaskCount = tasks.filter((task) => task.status === 'finished');
	return (
		<footer className={css.footer}>
			<div className={css.counts}>
				<>
					<p className={css.count}>Active tasks: &lt; {activeTaskCount.length}&gt;</p>
					<p className={css.count}>FinishedTask: &lt;{finishedTaskCount.length}&gt;</p>
				</>
			</div>
			<div className={css.copy}>Kanban Board by Dar, 2024</div>
		</footer>
	)
}

export default Footer