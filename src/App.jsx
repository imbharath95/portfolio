import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Head from "./components/head/Head";
import Info from "./components/info/Info";
import Contact from "./components/contact/Contact";
const App = () => {
  return (
    <div>
      <section id="Home Page">
        <Navbar />
        <Head />
      </section>
      <section id="Services">
        <Info />
      </section>
      <section id="Contact Us">
        <Contact />
      </section>
    </div>
  );
};

export default App;
