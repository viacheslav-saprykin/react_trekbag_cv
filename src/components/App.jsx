
import BackgroundHeading from './BackgroundHeading';
import Footer from './Footer';
import Header from './Header';
import ItemlList from './ItemList';
import SideBar from './Sidebar';

function App() {
  return (
    <>
      <BackgroundHeading />

      <main>

          <Header />
          <ItemlList />
          <SideBar />

      </main>

      <Footer />
    </>
  );
}

export default App;
