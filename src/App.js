import AddTask from "./components/addTask";
import Tasklist from "./components/taskList";


function App() {
    return ( 
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">Task Manager</a>
            </div>
        </nav>
        <AddTask />
        <Tasklist />
        
        </>
);
}

export default App;