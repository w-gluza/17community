import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';

function Task({ task, index, completeTask, removeTask }) {
  return (
    <article
      className='task'
      style={{ textDecoration: task.completed ? 'line-through' : '' }}>
      <p>{task.title}</p>
      <div className='btn-group'>
        <button style={{ background: 'red' }} onClick={() => removeTask(index)}>
          &#10007;
        </button>
        <button
          style={{ background: 'green' }}
          onClick={() => completeTask(index)}>
          &#10004;
        </button>
      </div>
    </article>
  );
}

function CreateTask({ addTask }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;

    addTask(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id='outlined-basic'
        className='task-input'
        label='Add a task'
        variant='outlined'
        value={value}
        placeholder='Add a task'
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function Todo() {
  const [tasks, setTasks] = useState([
    {
      title: 'Donate clothes to the Red Cross.',
      completed: true,
    },
    {
      title: 'Do not buy anything on Black Friday.',
      completed: true,
    },
    {
      title: 'Write a letter for Amnesty International.',
      completed: false,
    },
  ]);

  const [tasksCompleted, setTasksCompleted] = useState(0);

  useEffect(() => {
    setTasksCompleted(tasks.filter(task => task.completed).length);
  }, [tasks]);

  const addTask = title => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  const completeTask = index => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className='milestones-container'>
      <div className='header'>
        <h4>Milestones</h4>
        <h4>Completed: {tasksCompleted}</h4>
      </div>

      <div className='create-task'>
        <CreateTask addTask={addTask} />
      </div>
      <div className='tasks'>
        {tasks.map((task, index) => (
          <Task
            task={task}
            completeTask={completeTask}
            removeTask={removeTask}
            index={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Todo;
