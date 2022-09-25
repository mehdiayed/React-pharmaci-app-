import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddUser from "./pages/AddUser";
import AddMedic from "./pages/AddMedic";
import ListMedic from "./pages/ListMedic";
import Footerfooter from "./components/Footerfooter"
import EspaceUser from "./pages/EspaceUser";
import EspaceCmd from "./pages/EspaceCmd";
import ListCmd from "./pages/ListCmd";
import ListUsers from "./pages/ListUsers";
import EspaceConsultationVente from "./pages/EspaceConsultationVente";
function App() {
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          
          <Route path="/menu" exact component={Menu} />
          
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/menu/EspaceUser" exact component={EspaceUser}/>
          <Route path="/menu/ListUsers" exact component={ListUsers}/>
          <Route path="/menu/EspaceCmd" exact component={EspaceCmd}/>
          <Route path="/menu/ListCmd" exact component={ListCmd}/>
          <Route path="/menu/AddMedic" exact component={AddMedic}/>
          <Route path="/menu/ListMedic" exact component={ListMedic}/>
          <Route path="/menu/EspaceConsultationVente" exact component={EspaceConsultationVente}/>
          
        </Switch>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
