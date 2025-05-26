import ItemsContextProvider from '../contexts/ItemsContextProvider';
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
        <ItemsContextProvider>
          <Header />
          <ItemlList />
          <SideBar />
        </ItemsContextProvider>
      </main>

      <Footer />
    </>
  );
}

export default App;
