import { useState } from "react";

export default function Todo(){
     const [task, setTask] = useState<string[]>([]);
      const [text, setText] = useState<string>("");
      const Submit = () => {
        if (text == "") return;
        console.log(text);
        setTask((prev) => [...prev, text]);
        setText("");
      };
    
      return (
        <div>
          <h1>Todo List</h1>
          <div>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Add your task"
            />
            <div>
              <button onClick={Submit}>Submit</button>
            </div>
          </div>
    
          <ul>
            <li>
              <span>Walk the dog</span>
              <button>Delete</button>
            </li>
            <li>
              <span>Water the plants</span>
              <button>Delete</button>
            </li>
            <li>
              <span>Wash the dishes</span>
              <button>Delete</button>
            </li>
    
            {task.map((task, index) => (
              <li>
                <span>{task}</span>
                <button
                  onClick={() =>
                    setTask((prev) => prev.filter((_, i) => i !== index))
                  }
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
         
}