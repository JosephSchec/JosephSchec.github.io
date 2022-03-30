import './App.css';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import PageLayout from './HelperFunctions/PageLayout';

function App() {
  return (
    <><Navbar />
    <PageLayout/>
      
      <Routes>
        <Route index element={<></>} />
        <Route path='*' element={<Navigate to='/' replace='true' />} />
      </Routes>
      <Outlet />
    </>
  );
}

export default App;
