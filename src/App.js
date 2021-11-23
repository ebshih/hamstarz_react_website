import { useRef } from "react";
import Navigation from './component/Navigation'
import Home from "./component/Home";
import Story from "./component/Story";
import FAQ from "./component/FAQ";
import RoadMap from "./component/RoadMap";
import Team from './component/Team';
import Footer from './component/Footer';

function App() {

  const home = useRef(null)
  const story = useRef(null)
  const road = useRef(null)
  const faq = useRef(null)
  const team = useRef(null)
  const footer = useRef(null)

  function scrollTo(val) {
    if (val == "s") {
      window.scrollTo({
        top: story.current.offsetTop,
        behavior: "smooth"
      })
    } else if (val == "h") {
      window.scrollTo({
        top: home.current.offsetTop,
        behavior: "smooth"
      })
    }  else if (val == "r") {
      window.scrollTo({
        top: road.current.offsetTop,
        behavior: "smooth"
      })
    } else if (val == "f") {
      window.scrollTo({
        top: faq.current.offsetTop,
        behavior: "smooth"
      })
    } else if (val == "c") {
      window.scrollTo({
        top: team.current.offsetTop,
        behavior: "smooth"
      })
    } else if (val == "sm") {
      window.scrollTo({
        top: footer.current.offsetTop,
        behavior: "smooth"
      })
    }
  }

  return (
    <div>
      <Navigation scrollTo={scrollTo} />
      <Home myref={home} />
      <Story myref={story} />
      <RoadMap myref={road} />
      <FAQ myref={faq} />
      <Team myref={team} />
      <Footer myref={footer} />
    </div>
  );
}

export default App;
