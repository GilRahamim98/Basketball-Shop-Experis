import ProductDetails from './Components/ProductDetails'
import About from './Components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Components/ProductDetails.css'
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import BasketNavBar from './Components/BasketNavBar';
import BasketBallFooter from './Components/BasketBallFooter';
import Home from './Components/Home';
import Cart from './Components/Cart';
import MyAccount from './Components/MyAccount';


function App() {
  return (
    <div className="App">


      {/* <About></About> */}
      {/* <ProductDetails id={2}></ProductDetails> */}
      {/* <LoginPage></LoginPage> */}
      {/* <RegisterPage></RegisterPage> */}
      {/* <Home></Home> */}
      {/* <Cart></Cart> */}
      <MyAccount ></MyAccount>
      <BasketBallFooter></BasketBallFooter>


    </div>
  );
}

export default App;
