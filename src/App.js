import { useEffect, useState } from 'react';
import TaskCreator from './TaskCreator';
import "./common.css"
import ShowTask from './ShowTask';

function App() {
    const [taskList, setTaskList] = useState([])

    return (
        <div className="myDiv">
            <TaskCreator setTaskList={setTaskList}/>
            <ShowTask taskList={taskList} />
        </div>
    );
}

export default App;
