import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Head from "./components/head/Head";
import Info from "./components/info/Info"
const App = () => {
  return <div>
    <section id = "Home Page">
      <Navbar />
      <Head/>
      </section>
    <section id = "Services"><Info/></section>
   
    <section id = "About Us">About Us</section>
    <section id = "Contact Us">Contact Us</section>
    
    
    {/* <Test/> */}
  </div>;
};

export default App;
