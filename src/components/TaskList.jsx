import { Task } from "./Task";

export const TaskList = (props) => {
    const { list } = props;

    return (
        <div>
            {list.map((task, index) => (
                <Task
                    key={index}
                    name={task.name}
                    completed={task.completed}
                />
            ))}
        </div>
    );
}