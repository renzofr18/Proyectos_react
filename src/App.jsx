import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

export default function App() {

  
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="conteiner mx-auto p-10">
      <TaskForm/>
      <TaskList/>
      </div>
    </main>
  );
}

