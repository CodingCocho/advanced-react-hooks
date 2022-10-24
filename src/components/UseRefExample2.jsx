import {useEffect, useRef, useState} from 'react';

export const UseRefExample2 = () =>
{

    // Set the useState for the name
    const [name, setName] = useState('')

    // Set the useRefs for render count and previous name state
    const renders = useRef(1);
    const prevName = useRef();

    /*
    Increment the renders useRef and set the name to the previous state
    @dependency name the name useState 
    */
    useEffect(() =>
    {
        renders.current = renders.current + 1; 
        prevName.current = name;       
    }, [name])

    return (
        <>
        
        {/* Hold the example card component */}
        <div
            className="card bg-base-100 shadow-xl w-1/2 mx-auto max-w-xs mt-8"
            >
                <div 
                className="card-body form-control w-full max-w-xs">
                    <p
                    className='label'
                    >
                        useRef Example 2
                    </p>
                    <p
                    className='label'
                    >
                        Previous State Name: {name}
                    </p>
                    
                    {/* Hold the renders of the component */}
                    <h1
                    className='label'
                    >
                        Renders: {renders.current} 
                    </h1>

                    {/* Hold the Daisy UI label component */}
                    <label 
                    className="label"
                    >
                        <span 
                        className="label-text"
                        >
                            Enter you name
                        </span>
                    </label>

                    {/* Hold the Daisy UI input component */}
                    <input 
                    className="input input-bordered w-full max-w-xs" 
                    placeholder="Type here"
                    onChange={(e) => setName(e.target.value)}
                    type="text"  
                    value={name}
                    />
                        
                </div>
            </div>
        </>
    )
}