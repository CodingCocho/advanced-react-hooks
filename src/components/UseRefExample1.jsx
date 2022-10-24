import {useRef, useState} from 'react';

export const UseRefExample1 = () =>
{

    // Set the useState for the alert
    const [showAlert, setShowAlert] = useState(false);

    // Set the useRefs for the alert and input
    const alertRef = useRef();
    const inputRef = useRef();

    // Component functions

    /*
    Show the alert component with the text in inputRef and 
    hide the alert after a short delay
    @param e the form event
    @return none
    */
    const handleSubmit = (e) =>
    {

        // Prevent page refresh
        e.preventDefault();

        // Set the alert text using alertRef
        alertRef.current.innerText = 'Your name is ' + inputRef.current.value;
        
        // Show the Daisy UI alert component
        setShowAlert(true);

        // Set a delay to reset all useRefs and hide the alert component
        setTimeout(() =>
        {
            setShowAlert(false);
            alertRef.current.innerText = '';
            inputRef.current.value = '';
        }, 3000)
    }

    return (
        <>

            {/* Hold the example card component */}
            <form
            className="card bg-base-100 shadow-xl w-1/2 mx-auto max-w-xs"
            onSubmit={handleSubmit}
            >
                <div 
                className="card-body form-control w-full max-w-xs">
                    <p
                    className='label'
                    >
                        useRef Example 1
                    </p>
                    <label 
                    className="label"
                    >
                        <span 
                        className="label-text"
                        >
                            Enter you name
                        </span>
                    </label>
                    
                    {/* Hold the input that is using useRef */}
                    <input 
                    className="input input-bordered w-full max-w-xs" 
                    placeholder="Type here"
                    ref={inputRef}
                    type="text"  
                    />

                    {/* Hold the submit button */}
                    <button 
                    className="btn mt-2"
                    type="submit"
                    >
                        Button
                    </button>
                    
                    {/* Hold the Daisy UI alert component */}
                    <div 
                    className="alert alert-success shadow-lg"
                    style={{ display: showAlert ? 'block' : 'none' }}
                    >
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            
                            {/* Hold the text that was submitted */}
                            <span
                            ref={alertRef}                            >
                            </span>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}