
import './App.css';
import Footer from './Compunents/Footer';
 import Navbar from './Compunents/Navbar';
import GetUpdate from './pages/GetUpdate';
import Home from './pages/Home';
import OurServices from './pages/OurServices';

function App() {
  return (
   
   <div>
     <Navbar/> 
     <Home/>
     <OurServices/>
     <GetUpdate/>
     <Footer/>
      
   </div>
  );
}

export default App;
