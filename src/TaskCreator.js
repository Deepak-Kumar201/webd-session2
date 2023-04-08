import React from 'react'

export default function TaskCreator(props) {
    const { setTaskList } = props;

    const addTaskToList = (btn) => {
        btn.preventDefault();
        setTaskList((e) => {
            e.push(document.getElementById("inputPassword2").value);
            return e;
        })
    }

    return (
        <form class="row g-3">
            <div class="col-auto">
                <label for="inputPassword2" class="visually-hidden">Task</label>
                <input type="text" class="form-control" id="inputPassword2" placeholder="Task" />
            </div>
            <div class="col-auto">
                <button class="btn btn-primary mb-3" onClick={addTaskToList}>Add Task</button>
            </div>
        </form>
    )
}