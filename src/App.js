import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience";

function App() {
  return (
<div>
  <NavBar />
  <Home/>
  <SocialLinks/>
  <About/>
  <Portfolio/>
  <Skills/>
  <Experience/>
  <Contact/>
</div>
  );
}

export default App;
