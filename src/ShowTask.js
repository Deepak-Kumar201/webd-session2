import React from 'react'

export default function ShowTask(props) {
    const { taskList } = props;

    return (
        <div>
            <ol>
                {
                    taskList.map((e) => {
                        return <li>{e}</li>
                    })
                }
            </ol>
        </div>
    )
}
