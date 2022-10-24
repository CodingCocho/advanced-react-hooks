import  useFetch from '../hooks/useFetch';

export const CustomHookUseFetchExample = () =>
{

    // Deconstruct the useFetch custom hook
    const {data, error, loading} = useFetch('https://jsonplaceholder.typicode.com/posts/1', {});

    return (
        <>

            {/* Hold the example card component */}
             <div
            className="card bg-base-100 shadow-xl w-1/2 mx-auto max-w-xs mt-8"
            >
                <div 
                className="card-body form-control w-full max-w-xs"
                >
                    <p
                    className='label'
                    >
                        Custom Hook 
                    </p>
                    <p
                    className='label'
                    >
                        useFetch Example 
                    </p>

                    {/* Conditional render the data fetched from useFetch */}
                    {loading ? 
                    
                    // Hold the label for the loading useState
                    <p
                    className='label'
                    >
                        custom hooking data is loading...
                    </p> 
                    :
                    <>
                    
                        {/* Hold the title of the post object */}
                        <p
                        className='label'
                        >
                            {data.title}
                        </p>

                        {/* Hold the body of the post object */}
                        <p
                        className='label'
                        >
                            {data.body}
                        </p>
                    </>
                    }

                    {/* Conditional render the error */}
                    {error &&
                    <>

                        {/* Hold the error message */}
                        <p
                        className='label'
                        >
                            Error
                        </p>
                    </>
                    }
                </div>
            </div>
        </>
    )
}