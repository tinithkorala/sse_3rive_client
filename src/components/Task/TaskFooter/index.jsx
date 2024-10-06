import { Stack } from "@mui/material";
import Pagination from "../../ui/Pagination";
import { useTaskContext } from "../../../context/TaskContext";

const TaskFooter = () => {
  const { currentPage, setCurrentPage, totalPage } = useTaskContext();

  return (
    <Stack justifyContent="center">
      {totalPage >= 1 && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPage={totalPage}
        />
      )}
    </Stack>
  );
};

export default TaskFooter;
