import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import Home from './Components/Home/Home';
import Introduction from './Components/Attorneys/Introduction/Introduction';
import WhyUs from './Components/Attorneys/Introduction/WhyChooseUs';
import AreaOfPractices from './Components/AreasOfInterest/AreaOfPractices';
import HappyClients from './Components/HappyClients/HappyClients';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Introduction/>
    <WhyUs />
    <AreaOfPractices/>
    <HappyClients/>
    </>
  );
}

export default App;
