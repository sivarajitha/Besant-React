import './App.css'
import Navbar from './Components/Navbar/NavBar';
import Count from './Components/Counter/Counter';
import Card from './Components/Card/Card';
import BgColor from './Components/BgColor/BgColor';
import passwordGenerator from './Components/passwordGenerator/passwordGenarator'
import InterestCalculator from './Components/SimpleInterestCalculator/InterestCalculator';
function App() {
 

  return ( 
    <>
    <div>
    <Navbar/>
    <div>
    <Count/>
    <div>
      <Card name="LION" details="A pride is a group of lions that live together. The members of a pride spend days in several scattered groups that meet to hunt or share a meal. Each pride has its own territory that it defends, ranging from 20 square km (8 square miles) if food is abundant to 400 square km (around 150 square miles) if food is sparse."/>
    </div>
 
      <BgColor/>
     
      
 
    </div>
    <InterestCalculator/> 
   <div>
      <passwordGenerator/>
      </div>
    </div>

 
    </>

  )
}

export default App
