
import './App.css';
import Main from './Components/Main'
import  {BreakpointProvider } from 'react-socks';


function App() {
  return (
    <BreakpointProvider>
    <div className="App">
          <Main/>
    </div>
    </BreakpointProvider>
  );
}

export default App;
