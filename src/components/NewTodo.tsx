import { useRef } from "react";

const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // why '?' the ref is not necessarily set to a value yet
    const enterText = todoTextInputRef.current!.value;

    if (enterText.trim().length === 0) {
      // throw an error
      return
    }

    props.onAddTodo(enterText)
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="'test">Todo text</label>
      <input id="text" type="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
