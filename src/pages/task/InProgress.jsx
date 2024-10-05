import TaskWrapper from "../../components/Task"
import { TASK_STATUS } from "../../config/enumConfig"

const InProgress = () => {

  const options = {
    title: 'In Progress',
    keyword: TASK_STATUS?.IN_PROGRESS
  }

  return (
    <>
      <TaskWrapper options={options} />
    </>
  )
}

export default InProgress