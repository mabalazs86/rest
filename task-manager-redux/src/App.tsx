import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskForm from './components/TaskForm';
import { GetTasks } from './redux/actions/TaskActions';
import { RootStore } from './redux/Store';

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootStore) => state.task.tasks);

  useEffect(() => {
    dispatch(GetTasks());
  }, []);
  
  return (
  <>
    {tasks && tasks.length && tasks.map(task => (
      <>
        {task.title}
        {task.status}
      </>
    ))}
    <TaskForm />
  </>
  );
}

export default App;
