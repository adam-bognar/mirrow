
import { Route, Router } from "wouter";
import { LandingPage } from "./Pages/LandingPage";
import { SigninPage } from "./Pages/SigninPage";
import { SignupPage } from "./Pages/SignupPage";


export function App() {

  return (
    <div>

         <Router>
            <Route path="/" component={LandingPage} />
            <Route path="/signin" component={SigninPage} />
            <Route path="/signup" component={SignupPage} />
         </Router>
    </div>
  )
}
