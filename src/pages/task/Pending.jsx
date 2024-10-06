import TaskWrapper from "../../components/Task"
import { TASK_STATUS } from "../../config/enumConfig"

const Pending = () => {

  const options = {
    title: 'Pending Tasks',
    keyword: TASK_STATUS?.PENDING?.keyword
  }

  return (
    <>
      <TaskWrapper options={options} />
    </>
  )
}

export default Pending