import { useState } from "react"; 


export default function NewTask({ onAdd }){

    const [enteredTask, setEnteredTask] = useState("");

    function handleChange(event){
        setEnteredTask(event.target.value);
    }

    function handleClick(){
        // console.log("enteredTask:", enteredTask);

        if(enteredTask.trim() ===""){
            return;
        }
        onAdd(enteredTask);
        setEnteredTask("");
    }




  
    return(
        <div className="flex items-center gap-4 ">
            <input 
            type="text" 
            className="w-64 px-2 py-1 rounded-sm bg-stone-200 shadow-md" 
            onChange={handleChange}
            value={enteredTask}
            />
            <button className="bg-stone-800 p-1 text-stone-300 rounded-sm hover:text-stone-100"
            onClick={handleClick}
            >
                Add Task
            </button>
        </div>
    )
}


