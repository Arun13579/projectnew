import Nav from "./Vebboxfile/Nav";
import Home from "./Vebboxfile/Home";
import Servicehead from "./Vebboxfile/Servicehead";
import Servicecall from "./Vebboxfile/Servicecall";
import Productcall from "./Vebboxfile/Productcall";
import Team from "./Vebboxfile/Team";
import Aboutcall from "./Vebboxfile/Aboutcall";
import Contact from "./Vebboxfile/Contact";
import Footer from "./Vebboxfile/Footer";

function App() {
  return (
    <div>
      <Nav />

      <section id="pagehome">
        <Home />
      </section>

      <section id="pageservices">
        <Servicehead
          head="___SERVICES___"
          text="Our software development services"
        />
        <Servicecall />
      </section>

      <section id="pageproducts">
        <Servicehead
          head="___PRODUCTS___"
          text="People don't buy products, they buy solutions"
        />
        <Productcall />
      </section>

      <section id="pageteam">
        <Servicehead
          head="___TEAM___"
          text="Teamwork is the ability to work together toward a common vision."
        />
        <Team />
      </section>

      <section id="pageabout">
        <Servicehead head="___ABOUT US___" />
        <Aboutcall />
      </section>

      <section id="contact">
        <Servicehead head="___CONTACT US___" />
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
