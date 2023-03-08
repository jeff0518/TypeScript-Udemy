import { useRef, useContext } from "react";
import { TodosContext } from "../store/TodosContext";
import classes from './NewTodo.module.css'

const NewTodo: React.FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const todosCtx = useContext(TodosContext)
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // why '?' the ref is not necessarily set to a value yet
    const enterText = todoTextInputRef.current!.value;

    if (enterText.trim().length === 0) {
      // throw an error
      return
    }

    todosCtx.addTodo(enterText);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="'test">Todo text</label>
      <input id="text" type="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
