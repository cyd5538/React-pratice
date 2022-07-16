import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Recommend from "./components/Recommend";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (  
    <div>
      {/* <ScrollToTop /> */}
      <Navbar />
      <Hero />
      <Service />
      {/* <Recommend />
      <Testimonials />
      <Footer /> */}
    </div>
  );
}

export default App;
