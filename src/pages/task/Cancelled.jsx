import TaskWrapper from "../../components/Task"
import { TASK_STATUS } from "../../config/enumConfig"

const Cancelled = () => {

  const options = {
    title: 'Cancelled Tasks',
    keyword: TASK_STATUS?.CANCELLED?.keyword
  }

  return (
    <>
      <TaskWrapper options={options} />
    </>
  )
}

export default Cancelled