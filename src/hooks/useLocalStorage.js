import {useState} from 'react';

/*
Add the key and values to local storage
@param key the key in local storage
               initialValue the value of the key in local storage
@return useState [localStorageValue setValue]
                            localStorageValue the value retrieve from local storage
                            setValue the function to update the value in local storage
*/
function useLocalStorage(key, initialValue) 
{

    // Set the useState for the passed in key and initialValue
    const [localStorageValue, setLocalValue] = useState(() =>
    
        // Call getLocalStorageValue to retrieve the value for localStorageValue
        getLocalStorageValue(key, initialValue)
    );

    /*
    Update the local storage value
    @param value the new value for the local storage 
    @return none
    */
    const setValue = (value) =>
    {

        // Check if the value is a function
        const valueToStore = value instanceof Function ? value(localStorageValue) : value
        
        // Update the localStorageValue useState
        setLocalValue(value);

        // Set the item in local storage
        localStorage.setItem(key, JSON.stringify(valueToStore))
    }

    // Return the useState of the hook
    return [localStorageValue, setValue] 

}

/*
Retrieve the data from local storage using a key 
@param key the key used to retrieve data from local storage
               initialValue the initial value from local storage
@return any the data that was stored in local storage
*/
function getLocalStorageValue(key, initialValue)
{

    // Retrieve the data from local storage using the key passed in
    const itemFromStorage = localStorage.getItem(key);

    // Return the item retrieve from local storage or the initial value of the useLocalStorage hook
    return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue;
}

export default useLocalStorage;