import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          {/* <Route path="/service" component={Services} /> */}
          <Route path="/contact" component={Contact} />
        </Switch>
        <br />
        <Footer />
      </Router>
    </>
  );
}

export default App;
