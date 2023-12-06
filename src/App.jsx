import './styles/index.scss';
import Header from './components/Header.js';
import NavBar from './components/NavBar.js';
import Spotlight from './components/Spotlight.jsx';
import TopCategory from './components/TopCategory';
import Popular from './components/Popular.js';
import Deal from "./components/Deal.jsx"
import Brand from './components/Brand.jsx';
import Footer from "./components/Footer.jsx";
import Grab from './components/Grab.jsx';



function App() {
  return (
   <>
   <Header />
   <NavBar />
   <Spotlight />
   <TopCategory />
   <Popular button={true}  title={"Popular"} apiData/>
   <Deal />
   <Popular flag  title={"Just launched"}  />
   <Brand />
   <Grab />
   <Footer />



   </>
  );
}

export default App;
