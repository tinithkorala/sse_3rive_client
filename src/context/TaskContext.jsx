import {
  useContext,
  createContext,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import PropTypes from "prop-types";
import { TASK_PRIORITY } from "../config/enumConfig";
import { taskFilter } from "../api/taskApi";

const TaskContext = createContext();

const TaskProvider = ({ options, children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [priorityFilter, setPriorityFilter] = useState("ALL");
  const [taskList, setTaskList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const handleFetchTasks = useCallback(async () => {
    try {
      const priorityStr =
        priorityFilter === "ALL"
          ? Object.keys(TASK_PRIORITY)?.join(",")
          : priorityFilter;
      const response = await taskFilter(priorityStr, currentPage);
      setTaskList(response?.data?.tasks || []);
      setTotalPage(response?.totalPages || 0);
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  }, [currentPage, priorityFilter]);

  useEffect(() => {
    handleFetchTasks();
  }, [handleFetchTasks]);

  useEffect(() => {
    setCurrentPage(1);
  }, [priorityFilter])

  return (
    <TaskContext.Provider
      value={useMemo(
        () => ({
          priorityFilter,
          setPriorityFilter,
          taskList,
          currentPage,
          setCurrentPage,
          totalPage,
          options,
          loading,
          error,
        }),
        [
          priorityFilter,
          taskList,
          currentPage,
          totalPage,
          options,
          loading,
          error,
        ]
      )}
    >
      {children}
    </TaskContext.Provider>
  );
};

TaskProvider.propTypes = {
  children: PropTypes.node.isRequired,
  options: PropTypes.object.isRequired,
};

const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error("useTaskContext must be used within an TaskProvider");
  }
  return context;
};

export { TaskContext, TaskProvider, useTaskContext };
