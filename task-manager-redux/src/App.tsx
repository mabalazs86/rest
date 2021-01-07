import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import TaskForm from "./components/TaskForm";
import {
  GetTasks,
  DeleteTask,
  ChangeTaskStatus,
} from "./redux/actions/TaskActions";
import { RootStore } from "./redux/Store";

interface IStatusContainer {
  status: string;
}
const Container = styled.div`
  display: flex;
  width: 500px;
`;
const Title = styled.div`
  display: flex;
  flex: 1;
`;
const StatusContainer = styled.div<IStatusContainer>`
  display: flex;
  flex: 1;
  color: ${(props) => (props.status === "DONE" ? "red" : "blue")};
  cursor: pointer;
`;

const DeleteButton = styled.div`
  display: flex;
  flex: 1;

  color: red;
  cursor: pointer;
`;
const ErrorMessage = styled.div`
  display: flex;
  flex: 1;

  color: red;
`;

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootStore) => state.task.tasks);
  const errors = useSelector((state: RootStore) => state.task.errors);

  useEffect(() => {
    dispatch(GetTasks());
  }, []);

  return (
    <>
      {tasks &&
        tasks.length &&
        tasks.map((task) => (
          <Container key={task.id}>
            <Title>{task.title}</Title>
            <StatusContainer
              status={task.status}
              onClick={() => dispatch(ChangeTaskStatus(task))}
            >
              {task.status}
            </StatusContainer>
            <DeleteButton onClick={() => dispatch(DeleteTask(task.id))}>
              X
            </DeleteButton>
          </Container>
        ))}
      <TaskForm title="Add new task:" />
      {errors &&
        !!errors.length &&
        errors.map((error) => <ErrorMessage>{error}</ErrorMessage>)}
    </>
  );
}

export default App;
