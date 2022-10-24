/* eslint-disable no-unused-vars */
import {useEffect, useMemo, useRef, useState} from 'react';

export const UseMemoExample = () =>
{

    // Set useState for the number of the  number input
    const [number, setNumber] = useState(1)
 
    // Set the useState for the increment number
    const [inc, setInc] = useState(0)
  
    // Set the useMemo for the getSqrt function so it does not fire when the component is rendered
    const sqrt = useMemo(() => getSqrt(number), [number])
  
    // Set the useRef for the renders
    const renders = useRef(1)
  
    /*
    Increment the amount of renders 
    @dependencies none
    */
    useEffect(() => {
      renders.current = renders.current + 1
    })
  
    // Component functions

    /*
    Increment the inc useState and console.log the previous state
    @params none
    @return none
    */
    const onClick = () => {
      setInc((prevState) => {
        console.log(prevState + 1)
        return prevState + 1
      })
    }
    
    return (
        <>

            {/* Hold the example card component */}
            <div
            className="card bg-base-100 shadow-xl w-1/2 mx-auto max-w-xs mt-8"
            >
                <div className="card-body form-control w-full max-w-xs">       
                    <p
                    className='label'
                    >
                        useMemo Example 
                    </p>

                    {/* Hold the Daisy UI input component */}
                    <input
                    className='form-control bg-base-300 w-25 label'
                    onChange={(e) => setNumber(e.target.value)}
                    type='number'
                    value={number}
                    />

                    {/* Hold the result of the getSqrt function */}
                    <h2 
                    className='label'
                    >
                        The sqrt of {number} is {sqrt}
                    </h2>

                    {/* Hold the button the rerender the component */}
                    <button 
                    className='btn'
                    onClick={onClick} 
                    >
                        Re Render
                    </button>
                    
                    {/* Hold the renders of the component */}
                    <h3
                    className="label"
                    >
                        Renders: {renders.current}
                    </h3>
                </div>
            </div>
        </>
    )
}


/*
Get the square root of a number and console.log 0 to 10000 
@param n the number we want the square root of
@return float the square root of n
*/
function getSqrt(n) {
    for (let i = 0; i <= 10000; i++) {
      console.log(i)
    }
  
    console.log('Expensive Function Called!')
    return Math.sqrt(n)
  }