import Home from "./Component/Home";
import SingleMovie from './Component/SingleMovie'
import Error from "./Component/Error";
import { Routes , Route } from 'react-router-dom'
import './App.css'

const App=()=>{
  return<>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="movie/:id" element={<SingleMovie/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
  </>
}
export default App;