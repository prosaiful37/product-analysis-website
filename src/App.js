import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Review from './components/Review/Review';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>Dashboard</Route>
        <Route path='/blogs' element={<Blogs></Blogs>}>Blogs</Route>
        <Route path='/about' element={<About></About>}>About</Route>
      </Routes>
    </div>
  );
}

export default App;
