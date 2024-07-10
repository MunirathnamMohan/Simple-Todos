import './index.css'

const TodoItem = props => {
  const {todosList, onDeleteTodo} = props
  const {id, title} = todosList

  const onClicked = () => {
    onDeleteTodo(id)
  }

  return (
    <li className="text-con">
      <p className="items">{title}</p>
      <button className="btn" type="button" onClick={onClicked}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
