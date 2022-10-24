import React, {useCallback, useState} from 'react';

export const UseCallbackExample = () =>
{

    // Set the useState for the tasks
    const [tasks, setTasks] = useState([])

    // Update the tasks useState by using the useCallback function 
    // so the rest of the component does not render
    const addTask = useCallback(() => 
    {
        setTasks((prevState) => [...prevState, 'Some Task'])
    }, [setTasks])

    return (

        // Hold the example card component
        <div
        className="card bg-base-100 shadow-xl w-1/2 mx-auto max-w-xs mt-8"
        >
            <div 
            className="card-body form-control w-full max-w-xs"
            >
                <p
                className='label'
                >
                    useCallback Example 
                </p>
                
                {/* Hold the Button component that will add a task */}
                <Button addTask={addTask} />
                
                {/* Render the tasks */}
                {tasks.map((task, index) => (
                    
                    // Hold the task
                    <p 
                    className="label"
                    key={index}
                    >
                        {task}
                    </p>
                ))}     
            </div>
        </div>
    )
}

// Button component definition with React.memo so the button is not rerendered when
// the parent component is rendered
const Button = React.memo(({ addTask }) => 
{

    // Check if the button is rendered
    console.log('Button rendered')

    return (
        
        // Hold the button of the Button component
        <button 
        className='btn mx-auto' 
        onClick={addTask}
        >
            Add Task
        </button>
    )
})