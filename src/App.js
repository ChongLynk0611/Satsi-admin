import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';

import ContactHeader from './components/ContactHeader';
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import ScrollToTop from "./components/ReuseComponents/ScrollToTop";
import Fallback from "./components/Fallback";
import NewsPage from "./components/NewsPage";

const ContactPage = React.lazy(() => import("./components/ContactPage"));
const ProgramInfoPage = React.lazy(() => import('./components/ProgramInfoPage'));
const Home = React.lazy(() => import('./components/Home'));  
const IntroductionInfoPage = React.lazy(() => import("./components/IntroductionInfoPage"));
const ReputationInfoPage = React.lazy(() => import("./components/ReputationInfoPage"));
const Admin =  React.lazy(() => import('./features/Admin'));

function App() {
  return (
    <Router>
      {/* <ContactHeader />
      <Logo />
      <Navbar /> */}
      <Switch>
        <React.Suspense fallback={<Fallback />}>
          {/* <Route exact path="/">
            <Home />
          </Route>
          <Route path="/gioi-thieu">
            <IntroductionInfoPage />
          </Route>
          <Route path="/lo-trinh">
            <ReputationInfoPage />
          </Route>
          <Route path="/nghe/:id">
            <ProgramInfoPage />
          </Route>
          <Route path="/news">
            <NewsPage />
          </Route>
          <Route path="/lien-he">
            <ContactPage />
          </Route> */}
          <Route path="/Admin" component={Admin}/>
        </React.Suspense>
      </Switch>
      {/* <ContactUs />
      <Footer />
      <ScrollToTop /> */}
    </Router>
  );
}

export default App;
