import { useState, useEffect } from 'react';

import './App.scss';
import AddTodo from './components/AddTodo/AddTodo';
import Header from './components/Header/Header';
import TodoCard from './components/TodoCard/TodoCard';
import Footer from "./components/Footer/Footer";
import { isEmpty } from 'lodash';

const App = () => {
  const [data, setData] = useState([]);

  const setStatus = (id) => {
    let updateStatus = data.map((todo) => (
      todo.id === id ? { ...todo, status: !todo.status } : todo
    ))
    setData(updateStatus)
  }

  useEffect(() => {
    let todoList = localStorage.getItem('todo');
    setData(JSON.parse(todoList) ?? [])
  }, [])

  return (
    <div className="App">
      <Header />
      <section className='body-section'>
        <AddTodo toDo={data} addTodo={setData} />
        {isEmpty(data) ? <p className='emptyMessage'>Add your Todos</p> : data.map((todo, index) => (
          <TodoCard key={index} todo={todo} handleStatus={setStatus} />
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default App;
