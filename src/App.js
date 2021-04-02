import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import JuniorPage from "./SchoolPage/JuniorPage";
import PrimaryPage from "./SchoolPage/PrimaryPage";
import SeniorPage from "./SchoolPage/SeniorPage";
import First from "./WelcomePage/First";
import Second from "./WelcomePage/Second";
import SelectCourse from "./WelcomePage/SelectCourse";
import Registration from "./WelcomePage/SignUp/Registration";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Registration} />
        <Route path="/1" component={First} />
        <Route path="/2" component={Second} />
        <Route path="/course" component={SelectCourse} />
        <Route path="/pry" component={PrimaryPage} />
        <Route path="/jun" component={JuniorPage} />
        <Route path="/sen" component={SeniorPage} />
      </Switch>
    </Router>
  );
}

export default App;
