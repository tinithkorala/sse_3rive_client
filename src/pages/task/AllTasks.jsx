import TaskWrapper from "../../components/Task"
import { TASK_STATUS } from "../../config/enumConfig"

const AllTasks = () => {

  const options = {
    title: 'All Tasks',
    keyword: Object.keys(TASK_STATUS)
  }

  return (
    <>
      <TaskWrapper options={options} />
    </>
  )
}

export default AllTasks