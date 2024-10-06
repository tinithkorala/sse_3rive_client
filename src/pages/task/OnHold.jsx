import TaskWrapper from "../../components/Task"
import { TASK_STATUS } from "../../config/enumConfig"

const OnHold = () => {

  const options = {
    title: 'On Hold Tasks',
    keyword: TASK_STATUS?.ON_HOLD?.keyword
  }

  return (
    <>
      <TaskWrapper options={options} />
    </>
  )
}

export default OnHold