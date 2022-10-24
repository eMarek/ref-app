import { Fragment, useState } from "react";

function AppTodo() {
  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useState([])

  const handleInput = (event) => {
    setInputValue(event.currentTarget.value)
  }

  const handleAddButton = () => {
    setTodoList((todoList) => [{ key: Math.random().toString(), text: inputValue }, ...todoList])
    setInputValue('')
  }

  const handleRemoveButton = (todoKey) => {
    setTodoList((todoList) => {
      const updatedTodoList = todoList.filter((todoItem) => todoItem.key !== todoKey)
      return updatedTodoList
    })
  }

  const handleUpdateButton = (todoKey, updatedText) => {
    setTodoList((todoList) => {
      const updatedTodoList = todoList.map((todoItem) => todoItem.key !== todoKey ? todoItem : { ...todoItem, text: updatedText })
      return updatedTodoList
    })
  }

  return (
    <div style={{ border: '1px solid blue', margin: '10px', padding: '20px' }}>
      <input placeholder="Todo" value={inputValue} onChange={handleInput} />
      <button onClick={handleAddButton}>Add</button>
      <div style={{ marginTop: '10px' }}>
        {todoList.map((todoItem) => <TodoItem
          key={todoItem.key}
          todoItem={todoItem}
          onRemove={handleRemoveButton}
          onUpdate={handleUpdateButton}
        />)}
      </div>
    </div>
  );
}

export default AppTodo;

const TodoItem = ({ todoItem, onRemove, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [inputValue, setInputValue] = useState(todoItem.text)

  const handleEditButton = () => {
    setIsEditing(true)
  }

  const handleInput = (event) => {
    setInputValue(event.currentTarget.value)
  }

  const handleSaveButton = () => {
    onUpdate(todoItem.key, inputValue)
    setIsEditing(false)
  }

  return (
    <div style={{ marginBottom: '5px' }}>
      <button style={{ marginRight: '5px' }} onClick={onRemove.bind(this, todoItem.key)}>Remove</button>
      {isEditing ? (
        <Fragment>
          <button style={{ marginRight: '5px' }} onClick={handleSaveButton}>Save</button>
          <input placeholder="Todo" value={inputValue} onChange={handleInput} />
        </Fragment>
      ) : (
        <Fragment>
          <button style={{ marginRight: '5px' }} onClick={handleEditButton}>Edit</button>
          {todoItem.text}
        </Fragment>
      )}
    </div>
  )
}