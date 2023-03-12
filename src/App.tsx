import * as React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./fullpage.parallax.min";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import Hero from "./pages/hero/Hero";

const pluginWrapper = () => {
  require("./fullpage.parallax.min");
};

const App = () => (
  <ReactFullpage
    scrollBar={false}
    pluginWrapper={pluginWrapper}
    parallax={true}
    verticalCentered={false}
    parallaxOptions={{
      type: "cover",
      percentage: 30,
      property: "translate",
    }}
    bigSectionsDestination={"bottom"}
    autoScrolling={true}
    easingcss3={"cubic-bezier(0.745, 0.045, 0.255, 1)"}
    scrollingSpeed={2000}
    parallaxKey={"Zk1hWFpoYmkxemRHRnlZMlYyYVdNdVkyOXRBcl9FWUljR0Z5WVd4c1lYZz00QXY="}
    licenseKey={"K4C1H-Q7U3H-W65K9-92JFJ-RNBUP"}
    anchors={["home", "about", "work", "contact"]}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <Hero fullpageApi={fullpageApi} />
          <About />
          <Projects />
          <Contact />
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default App;
