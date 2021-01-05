import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CreateTask } from '../redux/actions/TaskActions';
import { TaskInput } from '../redux/actions/TaskActionsTypes';

function TaskForm() {
  const dispatch = useDispatch();

  const initTaskInput = {
    title: "",
    description: ""
  }

  const [value, setValue] = useState<TaskInput>(initTaskInput);
  return (
    <>
        <input type="text" name="title" value={value.title} onChange={e => setValue({ ...value, title: e.target.value })} />
        <input type="text" name="description" value={value.description} onChange={e => setValue({...value, description: e.target.value })} />
        <button onClick={() => {
          dispatch(CreateTask(value));
          setValue(initTaskInput);
        }}>Add</button>
    </>
  );
}

export default TaskForm;
