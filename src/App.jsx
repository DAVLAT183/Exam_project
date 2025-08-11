import './App.css'
import Top from './components/top/top.jsx'
import About from './components/aboutUs/About.jsx'
import Topp from './components/top2/top2.jsx'
import Btn from './components/btn/btn.jsx'
import Menu1 from './components/menu1/menu1.jsx'
import pizza1 from "./assets/pizza1.png"
import pizza2 from "./assets/pizza2.png"
import pizza3 from "./assets/pizza3.png"
import pizza4 from "./assets/pizza4.png"
import pizza5 from "./assets/pizza5.png"
import pizza6 from "./assets/pizza6.png"
import pizza7 from "./assets/pizza7.png"
import pizza8 from "./assets/pizza8.png"
import Rectangle11 from "./assets/Rectangle11.png"
import Rectangle10 from "./assets/Rectangle10.png"
import Rectangle9 from "./assets/Rectangle9.png"
import Rectangle12 from "./assets/Rectangle12.png"
import Rectangle112 from "./assets/Rectangle112.png"
import Rectangle102 from "./assets/Rectangle102.png"
import r12 from "./assets/r12.png"
import Event from './components/events/events.jsx'
import Group60 from './assets/Group60.png'
import image2 from './assets/image2.png'
import Footer from './components/footer/footer.jsx'

function App() {
  return (
    <div>
      <Top />
      <Topp />

      <h1 className='ho text'>Menu</h1>
      <div className='flex'>
        <Menu1 name="Italian" price="8,35$" img={pizza1} />
        <Menu1 name="Venecia" price="7,35$" img={pizza2} />
        <Menu1 name="Meat" price="9,35$" img={pizza4} />
        <Menu1 name="Cheese" price="8,35$" img={pizza3} />
      </div><br /><br /><br />
      <div className='flex'>
        <h1 className='ho cll'>MOST POPULAR PIZZA</h1>
      </div><br /><br /><br />
      <div className='flex'>
        <Menu1 name="Argentina" price="7,35$" img={pizza5} />
        <Menu1 name="Gribnaya" price="6,35$" img={pizza6} />
        <Menu1 name="Tomato" price="7,35$" img={pizza7} />
        <Menu1 name="Italian x2" price="8,35$" img={pizza8} />
      </div><br /><br /><br />
      <div className='fl'>
        <Event bg={Rectangle10} desc="HOW WE COOKING" className="none" />
        <div className='fl none'>
          <Event bg={Rectangle11} desc="OUR BLOG" />
          <div>
            <div className='f3'>
              <h1 className='ho'>Events</h1>
            </div>
            <p className='p'>There are regular events in our pizzeria that will</p>
            <p className='p'>allow you to eat delicious food for a lower price!</p>
          </div><br />
        </div>
      </div>
      <div className='fl'>
        <div className='f2'>
          <h1>TWO PIZZA FOR 1 PRICE </h1><br /><br /><br /><br />
          <Btn title="More" />
        </div>
        <div className='f5 none'>
          <h1>KITCHEN TOUR</h1><br /><br /><br /><br />
          <Btn title="More" />
        </div>
      </div><br /><br /><br /><br />
      <div className='fl'>
        <Event bg={Rectangle102} desc="FREE COFFEE FOR 3 PIZZA" />
        <div className='fl none'>
          <Event bg={Rectangle112} desc="OUR INSTAGRAM" />
          <Event bg={Rectangle12} desc="WHERE ARE YOU CHOOSE US?" />
        </div>
      </div><br /><br /><br /><br />
      <About img1={image2} img2={Group60} /><br/><br/>
      <Footer/>
    </div>
  )
}

export default App
