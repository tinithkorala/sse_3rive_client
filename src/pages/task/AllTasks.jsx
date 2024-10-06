import TaskWrapper from "../../components/Task"
import { TASK_STATUS_KEYS_ARRAY } from "../../config/enumConfig"

const AllTasks = () => {

  const options = {
    title: 'All Tasks',
    keyword: TASK_STATUS_KEYS_ARRAY
  }

  return (
    <>
      <TaskWrapper options={options} />
    </>
  )
}

export default AllTasks