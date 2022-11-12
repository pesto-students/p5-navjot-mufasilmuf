import React from 'react';
import { useForm } from 'react-hook-form';

import AddTodoStyle from './AddTodo.module.scss';

const AddTodo = ({ toDo, addTodo }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const formSubmit = (data) => {
        let updateToDo = [...toDo];
        data.status = false;
        data.id = Math.floor(Math.random() * 1000000);
        updateToDo.push(data);
        addTodo(updateToDo)
        localStorage.setItem('todo', JSON.stringify(updateToDo))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(formSubmit)} className={AddTodoStyle.addForm}>
            <p className={AddTodoStyle.form_title}>Add New Todo</p>
            <section>
                <label>Title</label>
                <input type={'text'} name='title' placeholder='Title' {...register('title', { required: true })} />
                {errors.title && <p className={AddTodoStyle.error}>title is required.</p>}
            </section>
            <section>
                <label>Description</label>
                <input type={'text'} name='description' placeholder='Description' {...register('description', { required: true })} />
                {errors.description && <p className={AddTodoStyle.error}>description is required.</p>}
            </section>
            <section>
                <button type={'submit'}>Add</button>
            </section>
        </form>
    )
}

export default AddTodo;