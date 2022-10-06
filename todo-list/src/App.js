import Todo from "./components/Todo";

function App() {
  return (
    <div className="list">
      <h1>Todo list</h1>
      <Todo text="Learn React" />
      <Todo text="Learn Python" />
      <Todo text="Learn Java" />
    </div>
  );
}

export default App;
