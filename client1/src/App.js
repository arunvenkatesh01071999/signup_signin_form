import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
 

function App(){
  return(
          <>
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signup/>}/>
            <Route path="/Signin" element={<Signin/>}/>
          </Routes>
          </BrowserRouter>
          </>
  );
}
export default App;