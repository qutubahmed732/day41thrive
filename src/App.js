import Herosection from "./Components/Herosection";
import Storysection from "./Components/Storysection";
import CTAsection from "./Components/CTAsection";
import Socialproof from "./Components/Socialproof";
import WhatsInside from "./Components/WhatsInside";
// import Form from "./Components/Form";
import Testimonials from "./Components/Testimonials";
import FinalCTAsection from "./Components/FinalCTAsection";

function App() {

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  return (
    <>
      <Herosection />
      <Storysection />
      <CTAsection />
      <Socialproof />
      <WhatsInside />
      {/* <Form /> */}
      <Testimonials />
      <FinalCTAsection />
    </>
  );
}

export default App;
