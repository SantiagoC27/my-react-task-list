import { useState } from "react";

export const Task = (props) => {

    const {name, isCompleted} = props;

    const [isChecked, setIsChecked] = useState(isCompleted || false)

    const handleDeleteItem = () => {
        console.log(`Tarea ${name} borrada`)
    }

    function handleCheckboxChange() {
        setIsChecked(!isChecked);
        console.log(`Tarea ${name} checkeada`)
      }

    return (
        <article>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
        <label htmlFor="myCheckbox" style={{textDecoration: isChecked ? "line-through" : ''}}> {name} </label>
          <button onClick={handleDeleteItem}>Delete</button>
        </article>
    )

}