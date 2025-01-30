import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from "./pages/Product"
import Cart from  "./pages/Cart"
import Login from "./pages/Login"
import PlaceOrder from "./pages/PlaceOrder"
import Orders from "./pages/Order"
import Navbar from './components/Navbar'
function App() {


  return (
    <>
     <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/collection' element={<Collection/>}/>
  <Route path='/about' element={<About/>}/>
<Route path='contact' element={<Contact/>}/>
<Route path='/product/:productId' element={<Product/>}/>
<Route path='cart' element={<Cart/>}/>
<Route path='login' element={<Login/>}/>
<Route path='place-order' element={<PlaceOrder/>}/>
<Route path='orders' element={<Orders/>}/>
</Routes>
     </div>
    </>
  )
}

export default App
//what is meaning of jsx
//javascript xml where you can write the html inside the javascript
//xml means kind of document where meachines and humans can understand because it has set of rule
//why not pass this Home why only <Home/> see we are not passing object we need to pass the jsx a instance of it so we need to call in that format only
