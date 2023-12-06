import TopCategory from './TopCategory';
import Header from './Header';
import NavBar from './NavBar';
import Spotlight from './Spotlight';
import Popular from './Popular';
import Deal from './Deal';
import Brand from './Brand';
import Grab from './Grab';
import Footer from "./Footer"


function Home() {
  return (
   <>
    <Header />
   <NavBar />
   <Spotlight />
   <TopCategory />
   <Popular button CatogoryButton  title={"Popular"}/>
   <Deal />
   <Popular  title={"Just launched"}  />
   <Brand />
   <Grab />
   <Footer />

   </>
  );
}

export default Home;
