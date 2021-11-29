import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//pages
import ProductsList from "./Screens/ProductsList";
import Product from "./Screens/Product";
import Cart from "./Screens/Cart";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import Home from "./Screens/Home";

//Components
import Navbar from "./Components/Navbar/Navbar";
import BackDrop from "./Components/BackDrop";
import SideDrawer from "./Components/SideDrawer";
import Footer from "./Components/Footer";
import nav from "./Screens/nav";
function App() {
  const [sideToggle, setSideToggle] = useState(false);
  // const user = useSelector(state => state.user.currentUser)    //TODO Implement persist 
  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <BackDrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Switch>
          <Route exact path="/products/:category" component={ProductsList} />
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Signup} />
          <Route exact path ='/' component ={Home}/>
          <Route exact path ='/nav' component ={nav}/>
        </Switch>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
