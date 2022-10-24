import useLocalStorage from '../hooks/useLocalStorage';

export const CustomHookUseLocalStorage = () =>
{

    // Set the keys in the local storage using useLocalStorage
    const [task, setTask] = useLocalStorage('task', '');
    const [tasks, setTasks] = useLocalStorage('tasks', []);

    // Component functions

    /*
    Add the task to the tasks key in local storage
    @param e the submit form event
    @return none
    */
    const onSubmit = (e) =>
    {   
        
        // Prevent the page refresh
        e.preventDefault();

        // Create a task object from the task
        const taskObj = 
        {
            task,
            complete: false,
            date: new Date().toLocaleDateString()
        }

        // Update the tasks key in local storage
        setTasks([...tasks, taskObj]);

    }

    return (
        <>

            {/* Hold the example card component */}
            <div
            className="card bg-base-100 shadow-xl w-1/2 mx-auto max-w-xs mt-8"
            >
                <form 
                className="card-body form-control w-full max-w-xs"
                onSubmit={onSubmit}
                >
                    <p
                    className='label'
                    >
                        Custom Hook 
                    </p>
                    <p
                    className='label'
                    >
                        useLocalStorage Example 
                    </p>

                    {/* Hold the label for the task */}
                    <label
                    className="form-label"
                    >
                        Enter a task:
                    </label>

                    {/* Hold the Daisy UI input component */}
                    <input 
                    className="input input-bordered form-control w-full nax-w-xs "
                    onChange={(e) => setTask(e.target.value)}
                    type="text" 
                    value={task}
                    />

                    {/* Hold to button for form submission */}
                    <button 
                    className="btn mt-2"
                    type="submit"
                    >
                        Submit Task
                    </button>
                </form>
            </div>
        </>
    )
}