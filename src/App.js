// import react and useState from react
import React, { useState } from 'react';
// import AppBar, Input and Button from @material-ui/core
import { AppBar, Button, Input } from '@material-ui/core';

// create App component
// that has a @material-ui/core AppBar with a header: "Todo List"
// and a TodoList component with a remove from list function
// and a TodoListInput component
const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems(items.concat([newItem]));
  };
  const removeItem = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  return (
    <div>
      <AppBar position="static">
        <h2>Todo List</h2>
      </AppBar>
      <TodoListInput onAdd={addItem} onRemove={removeItem} />
      <TodoList items={items} onRemove={removeItem} />
    </div>
  );
};

// create TodoListInput component
// that has props
// onAdd: function to add new item
// onRemove: function to remove item
// component has a @material-ui/core Input: "todo"
// and a @material-ui/core Button: "Submit"
const TodoListInput = ({ onAdd, onRemove }) => {
  const [newItem, setNewItem] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem.trim()) {
      onAdd(newItem);
      setNewItem('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add a Todo"
        inputProps={{
          'aria-label': 'Todo',
          'aria-describedby': 'add-todo-description',
        }}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </form>
  );
};

// create TodoList component
// that has props
// items: array of items
// onRemove: function to remove item
// render the items as a list
// and for each item show a @material-ui/core Button: "Remove"
const TodoList = ({ items, onRemove }) => {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>
          <Button variant="contained" color="primary" onClick={() => onRemove(i)}>
            Remove
          </Button>
          {item}
        </li>
      ))}
    </ul>
  );
};

// export App component
export default App;
