import TaskWrapper from "../../components/Task"

const AllTasks = () => {

  const options = {
    title: 'All Tasks',
    keyword: ''
  }

  return (
    <>
      <TaskWrapper options={options} />
    </>
  )
}

export default AllTasks