import React from 'react';

import TodoCardStyle from './TodoCard.module.scss';

const TodoCard = ({ todo: { id, title, description, status }, handleStatus }) => {

    return (
        <section className={TodoCardStyle.TodoCard}>
            <span className={status ? `${TodoCardStyle.completed_tag}` : `${TodoCardStyle.pending_tag}`}>{status ? "completed" : "pending"}</span>
            <div className={TodoCardStyle.title}>{title}</div>
            <p className={TodoCardStyle.description}>{description}</p>
            <input type={'checkbox'} className={TodoCardStyle.checkbox} checked={status} onChange={() => { handleStatus(id) }} />
        </section>
    )
}

export default TodoCard;