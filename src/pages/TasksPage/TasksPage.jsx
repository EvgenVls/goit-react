import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PageTitle from "../../components/PageTitle/PageTitle";
import TaskList from "../../components/TaskList/TaskList";
import TaskEditor from "../../components/TaskEditor/TaskEditor";
import { fetchTasks } from "../../redux/tasks/operations";
import { selctLoading } from "../../redux/tasks/selectors";

export default function TasksPage() {
  const isLoading = useSelector(selctLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <PageTitle>Your tasks</PageTitle>
      <TaskEditor />
      {isLoading && <p>Request in progress...</p>}
      <TaskList />
    </>
  );
}
