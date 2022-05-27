import "./App.css";
import About from "./Components/About/About";
import Cover from "./Components/Cover/Cover";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import News from "./Components/News/News";
import Photos from "./Components/Photos/Photos";
import Search from "./Components/Search/Search";

function App() {
  return (
    <div className='home'>
      <Navbar />
      <Cover />
      <Search />
      <Photos />
      <About />
      <News />
      <Footer />
    </div>
  );
}

export default App;
