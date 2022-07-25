import ProductDetails from './Components/ProductDetails'
import About from './Components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Components/ProductDetails.css'
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import BasketNavBar from './Components/BasketNavBar';
import BasketBallFooter from './Components/BasketBallFooter';


function App() {
  return (
    <div className="App">


      {/* <About></About> */}
      {/* <ProductDetails></ProductDetails> */}
      {/* <LoginPage></LoginPage> */}
      <RegisterPage></RegisterPage>
      <BasketBallFooter></BasketBallFooter>


    </div>
  );
}

export default App;
