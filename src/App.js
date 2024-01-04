import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
    <Outlet />
    </>
  );
}

export default App;
