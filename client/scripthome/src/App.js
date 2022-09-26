import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./routes/home/home.route";
import Navigation from "./components/navigation/navigation.component";
import Scripts from "./routes/scripts/scripts.component";
import Footer from "./components/footer/footer.component";
import { Fragment } from "react";
import { AnimatePresence } from "framer-motion";
import AnimatedPage from "./components/animations/animatedpage";

import AOS from "aos";
import "aos/dist/aos.css";
import Rerouter from "./routes/rerouter/rerouter";
AOS.init();

const App = () => {
  const location = useLocation();
  return (
    <Fragment>
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route
            path="/"
            element={
              <div>
                <Navigation />
                <AnimatedPage>
                  <Home />
                  <Footer />
                </AnimatedPage>
              </div>
            }
          ></Route>
          <Route
            path="/scripts"
            element={
              <div>
                <Navigation />
                <AnimatedPage>
                  <Scripts />
                  <Footer />
                </AnimatedPage>
              </div>
            }
          ></Route>
          <Route path="/admin" element={<Rerouter />} />
        </Routes>
      </AnimatePresence>
    </Fragment>
  );
};

export default App;
