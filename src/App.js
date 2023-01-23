import './App.css';
import Home from './Screens/Home/Home';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Plans from './components/Plans/Plans';
import Testimonials from './components/Testimonials/Testimonials';
import Join from './components/Join/Join';

function App() {
  return (
    <div className="App">
     <Home/>
     <Programs/>
     <Reasons/>
     <Plans/>
     <Testimonials/>
     <Join/>
    </div>
  );
}

export default App;
