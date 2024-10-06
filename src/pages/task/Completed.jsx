import TaskWrapper from "../../components/Task"
import { TASK_STATUS } from "../../config/enumConfig"

const Completed = () => {

  const options = {
    title: 'Completed Tasks',
    keyword: TASK_STATUS?.COMPLETED?.keyword
  }

  return (
    <>
      <TaskWrapper options={options} />
    </>
  )
}

export default Completed