import './App.css';
import AppClass from './AppClass';
import AppContext from "./AppContext";
import AppRef from "./AppRef";
import AppState from './AppState';
import AppTodo from './AppTodo';

function App() {
  return (
    <div>
      <AppRef />
      <AppContext />
      <AppClass />
      <AppTodo />
      <AppState />
    </div>
  );
}

export default App;
