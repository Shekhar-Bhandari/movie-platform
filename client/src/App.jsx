
import './App.css'
import {Routes,Route} from 'react-router-dom';
import Landing from './pages/Landing';
import Homepage from './pages/Homepage';
import MoviePage from './pages/MoviePage';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import CheckOut from './pages/CheckOut';
import Payment from './pages/Payment';
function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path='/home' element={<Landing/>}/>
      <Route path='/movie/:id' element={<MoviePage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/checkout/:id' element={<CheckOut/>}/>
      <Route path='/payment/:id' element={<Payment/>}/>

    </Routes>
     
       
    </>
  )
}

export default App
