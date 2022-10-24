import {useEffect, useState} from 'react';

/*
A React hook to fetch data from a url and provide a loading and error
status.
@params url the url from which we fetch our data
                options fetch api options 
@return loading boolean holds true if the data is loading
              error object holds the fetch API error object
              data object the JSON object from the fetch API 
*/
function useFetch(url, options) 
{

    // Set the useStates for the useFetch hook
    const [loading, setLoading] =  useState(true);
    const [error, setError] =  useState(null);
    const [data, setData] =  useState(null);

    /*
    Use the fetch API to fetch the data from the url passed in
    @dependencies none
    */
    useEffect(() =>
    {

        /*
        Use the fetch api and set the useStates of the useFetch hook
        @param none
        @return none
        */
        const fetchData = async () =>
        {

            // Try block so the error can be caught 
            try
            {
                
                // Get the response from the fetch API
                const response = await fetch(url, options);

                // Get the data from the response
                const data = await response.json();

                // Update the data useState
                setData(data);
                
            }
            
            // Catch the error from the fetch API
            catch(err)
            {

                // Update the error useState
                setError(err);
            }
        }

        // Set a timeout so the loading useState can reset
        setTimeout(() => {setLoading(false)}, 3000);
        
        // Call the fetchData function to update the useStates
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    // Return the useStates of the useFetch hook
    return {data, error, loading};
}

export default useFetch;