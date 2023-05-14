import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
// import AuthContext from "./contexts/authContext";
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice"
import Home from './pages/index';
import SignUpPage from './pages/signup';
import LogInPage from './pages/login';
import ProfessionalPage from "./pages/professional";
import PersonalPage from "./pages/personal";
import Diet from "./pages/diet";
import SchedulerPage from "./pages/scheduler";
import UserHomePage from "./pages/userhome";
import Email from "./pages/email";
import Password from "./pages/password";
import ExpensePage from "./pages/expense";
import IncomePage from "./pages/income";
import AnalysisPage from "./pages/analysis";
import Task from "./pages/task";
import BmiPage from "./pages/bmi";
import Tracker from "./pages/tracker";
import Finance from "./pages/finance";
import Retire from "./pages/retire";
import Webapp from "./pages/webapp";
import Bank from "./pages/bank";
import Loan from "./pages/loan";
import Interest from "./pages/interest";
import Instruments from "./pages/intruments";
import Editor from "./pages/editor";
import Investment from "./pages/investment";
function App() {
  // const authCtx = React.useContext(AuthContext);
  // console.log(authCtx.user);
  const user = useSelector(selectUser);
  return (
    <>
    {

        <Router>
          <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/signup' component={SignUpPage} exact/>
            {(!user)? <Route path='/login' component={LogInPage}/>: <Route path='/login' component={UserHomePage}/>}
            {(user)?<Route path='/userhome' component={UserHomePage}/>:<Route path='/userhome' component={LogInPage}/>}
            {(user)?<Route path='/task' component={Task}/>:<Route path='/task' component={LogInPage}/>}
            {(user)?<Route path='/professional' component={ProfessionalPage}/>:<Route path='/professional' component={LogInPage}/>}
            {(user)?<Route path='/personal' component={PersonalPage}/>:<Route path='/personal' component={LogInPage}/>}
            {(user)?<Route path='/diet' component={Diet}/>:<Route path='/diet' component={LogInPage}/>}
            {(user)?<Route path='/scheduler' component={SchedulerPage}/>:<Route path='/scheduler' component={LogInPage}/>}
            {(user)?<Route path='/bmi' component={BmiPage}/>:<Route path='/bmi' component={LogInPage}/>}
            {(user)?<Route path='/email' component={Email}/>:<Route path='/email' component={LogInPage}/>}
            {(user)?<Route path='/password' component={Password}/>:<Route path='/password' component={LogInPage}/>}
            {(user)?<Route path='/webapp' component={Webapp}/>:<Route path='/webapp' component={LogInPage}/>}
            {(user)?<Route path='/bank' component={Bank}/>:<Route path='/bank' component={LogInPage}/>}
            {(user)?<Route path='/tracker' component={Tracker}/>:<Route path='/tracker' component={LogInPage}/>}
            {(user)?<Route path='/expense' component={ExpensePage}/>:<Route path='/expense' component={LogInPage}/>}
            {(user)?<Route path='/income' component={IncomePage}/>:<Route path='/income' component={LogInPage}/>}
            {(user)?<Route path='/analysis' component={AnalysisPage}/>:<Route path='/analysis' component={LogInPage}/>}
            {(user)?<Route path='/finance' component={Finance}/>:<Route path='/finance' component={LogInPage}/>}
            {(user)?<Route path='/loan' component={Loan}/>:<Route path='/loan' component={LogInPage}/>}
            {(user)?<Route path='/interest' component={Interest}/>:<Route path='/interest' component={LogInPage}/>}
            {(user)?<Route path='/instruments' component={Instruments}/>:<Route path='/instruments' component={LogInPage}/>}
            {(user)?<Route path='/investment' component={Investment}/>:<Route path='/investment' component={LogInPage}/>}
            {(user)?<Route path='/editor' component={Editor}/>:<Route path='/editor' component={LogInPage}/>}
            {(user)?<Route path='/retire' component={Retire}/>:<Route path='/retire' component={LogInPage}/>}

          </Switch>
        </Router>
     
    }
    
    
    </>
  );
}

export default App;



