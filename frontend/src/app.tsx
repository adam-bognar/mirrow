
import { Route, Router } from "wouter";
import { LandingPage } from "./Pages/LandingPage";
import { SigninPage } from "./Pages/SigninPage";
import { SignupPage } from "./Pages/SignupPage";
import { RegisterBusiness } from "./Pages/RegisterBusiness";
import { BusinessManagement } from "./Pages/BusinessManagement";
import { BusinessDashboard } from "./Pages/BusinessDashboard";


export function App() {

  return (
    <div>

         <Router>
            <Route path="/" component={LandingPage} />
            <Route path="/signin" component={SigninPage} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/register-business" component={RegisterBusiness} />
            <Route path="/business-management" component={BusinessManagement} />
            <Route path="/business-dashboard/:id" component={BusinessDashboard} />
         </Router>
    </div>
  )
}
