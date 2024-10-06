import TaskWrapper from "../../components/Task"
import { TASK_STATUS } from "../../config/enumConfig"

const InProgress = () => {

  const options = {
    title: 'In Progress Tasks',
    keyword: TASK_STATUS?.IN_PROGRESS?.keyword
  }

  return (
    <>
      <TaskWrapper options={options} />
    </>
  )
}

export default InProgress