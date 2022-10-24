import {CustomHookUseFetchExample} from '../components/CustomHookUseFetchExample';
import {CustomHookUseLocalStorage} from '../components/CustomHookUseLocalStorage';
import {UseCallbackExample} from '../components/UseCallbackExample';
import {UseMemoExample} from '../components/UseMemoExample';
import {UseRefExample1} from '../components/UseRefExample1';
import {UseRefExample2} from '../components/UseRefExample2';
// import {UseRefExample3} from '../components/UseRefExample3';

function App() 
{
  return (
    
    // Hold the frontend that is rendered inside the root 
    <div 
    className="App bg-primary min-h-screen pt-8"
    >

      {/* Hold the useRef example 1 component */}
      <UseRefExample1 />
      
      {/* Hold the useRef example 2 component */}
      <UseRefExample2 />
      
      {/* Hold the useRef example 3 component */}
      {/* This component was deleted because I was unable to get the error Traversy was talking
      about even though I followed the step */}
      {/* He said it's not a common error and should only happen if code is written wrong */}
      {/* <UseRefExample3 /> */}

      {/* Hold the useMemo example  component */}
      <UseMemoExample />

      {/* Hold the useCallback example component */}
      <UseCallbackExample />

      {/* Hold the custom useFetch example component */}
      <CustomHookUseFetchExample />
      
      {/* Hold the custom useLocalStorage example component */}
      <CustomHookUseLocalStorage />
    </div>
  );
}

export default App;
