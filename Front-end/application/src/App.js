import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './product.css'
import {Link,Switch,BrowserRouter,Route} from 'react-router-dom'
import Nav from './Components/Nav'
import Products from './Components/products'
import Product from './Components/product'
import Add from './Components/addproduct'
import Signup from './Components/signup'
import Home from './Components/home'
import Login from './Components/signin'
import Dashboard from './Components/sellerdashboard'
import LoginAdmin from './Components/Login_Admin'
function App() {
  return (
    <BrowserRouter>
    
    <Switch>
      

      <Route path="/products" exact component={Products}/>
      <Route path="/product/:id" exact component={Product}/>
      <Route path="/signup" exact component={Signup}/>
      <Route path="/signin" exact component={Login}/>
      <Route path="/LoginAdmin" exact component={LoginAdmin}/>
      <Route path="/home" exact component={Home}/>
      <Route path="/sellerdashboard" exact component={Dashboard}/>
      <Route path="/addproduct" exact component={Add}/>
    </Switch>
    </BrowserRouter>
    
  );
}

export default App;
