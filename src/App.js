import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Upload from './pages/Upload/Upload';
import Register from './pages/Register/Register';
import Board from './pages/Dashboard/Board';
import FileUpload from './pages/Upload/FileUpload';
import NavBar from './pages/Navbar/Navbar'
import Dashboard from './pages/Dashboard/Dash'


function App() {
  return (
    <>
    <NavBar/>
    <BrowserRouter>
      <Routes>
        <Route path='/upload' element={<Upload />}></Route>
        <Route path='/login' element={<Register />}></Route>
        <Route path='/dashboard' element={<Board />}></Route>
        <Route path='/file' element={<FileUpload />}></Route>
<Route path='/dash' element={<Dashboard/>}></Route>


      </Routes>
    </BrowserRouter></>
  )
}

export default App;
