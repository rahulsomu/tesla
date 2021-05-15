import './App.css';
import Home from './components/Home';
import CarInfo from './CarInfo';
import Image1 from './images/model-s.jpg';
import Image2 from './images/model-y.jpg';
import Image3 from './images/model-3.jpg';
import Image4 from './images/model-x.jpg';
import Image5 from './images/solar-panel.jpg';
import Image6 from './images/solar-roof.jpg';
import Image7 from './images/accessories.jpg';



function App() {
  return (
    <div className="App">
     <Home bg={Image1} title={CarInfo[0].title} Btn1='custom order' Btn2='existing inventory'/>
     <Home  id='second'bg={Image2} title={CarInfo[1].title} Btn1='custom order' Btn2='existing inventory'/>
     <Home bg={Image3}title={CarInfo[2].title} Btn1='custom order' Btn2='existing inventory'/>
     <Home bg={Image4} title={CarInfo[3].title} Btn1='custom order' Btn2='existing inventory'/>
     <Home bg={Image5}title='Lowest Cost Solar Panels in America'  Btn1='order now' Btn2='learn more'/>
     <Home bg={Image6}title='Solar for New Roofs' Btn1='order now' Btn2='learn more'/>
     <Home bg={Image7}title='Accessories' Btn1='shop now'/>
    </div>
  );
}

export default App;