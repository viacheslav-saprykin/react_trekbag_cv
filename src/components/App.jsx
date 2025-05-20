import { useState } from 'react';
import BackgroundHeading from './BackgroundHeading';
import Footer from './Footer';
import Header from './Header';
import ItemlList from './ItemlList';
import SideBar from './SideBar';
import { initialItems } from './lib/constans';

function App() {
  const [items, setItems] = useState(initialItems);

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };

    const newItems = [...items, newItem];
    setItems(newItems);
  };

  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <ItemlList items={items} />
        <SideBar handleAddItem={handleAddItem} />
      </main>

      <Footer />
    </>
  );
}

export default App;
