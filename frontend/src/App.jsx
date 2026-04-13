import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RegisterDonor from "./components/RegisterDonar";
import SearchDonor from "./components/SearchDonar";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <Hero />
      <RegisterDonor />
      <div className="divider" style={{ maxWidth: "1100px", margin: "0 auto", width: "90%" }} />
      <SearchDonor />
      <div className="divider" style={{ maxWidth: "1100px", margin: "0 auto", width: "90%" }} />
      <About />
      <Footer />
    </div>
  );
}

export default App;