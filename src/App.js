import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';

import ContactHeader from './components/ContactHeader';
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import ScrollToTop from "./components/ReuseComponents/ScrollToTop";
import Fallback from "./components/Fallback";
import News from "./components/News";
// import ProgramInfor from "./components/ProgramInfor"

const ProgramInfor = React.lazy(() => import('./components/ProgramInfor'));
const Home = React.lazy(() => import('./components/Home'));  
const IntroductionInfo = React.lazy(() => import("./components/IntroductionInfo"));
const ReputationInfo = React.lazy(() => import("./components/ReputationInfo"));


function App() {
  return (
    <Router>
      <ContactHeader />
      <Logo />
      <Navbar />
      <Switch>
        <React.Suspense fallback={<Fallback />}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/gioi-thieu">
            <IntroductionInfo />
          </Route>
          <Route path="/lo-trinh">
            <ReputationInfo />
          </Route>
          <Route path="/nghe/:id">
            <ProgramInfor />
          </Route>
          <Route path="/news">
            <News />
          </Route>
        </React.Suspense>
      </Switch>
      <ContactUs />
      <Footer />
      <ScrollToTop />
    </Router>
  );
}

export default App;
