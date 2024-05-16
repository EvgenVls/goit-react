import { useEffect } from "react";
import Layout from "../Layout/Layout";
import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import { feachTasks } from "../../redux/tasksOps";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.tasks.loading);
  const isError = useSelector((state) => state.tasks.error);
  useEffect(() => {
    dispatch(feachTasks());
  }, [dispatch]);

  return (
    <Layout>
      <h1>HTTP requests with Redux</h1>
      <TaskForm />
      {isLoading && <Loader>Loading message</Loader>}
      {isError && <Error>Error message</Error>}
      <TaskList />
    </Layout>
  );
}

export default App;
