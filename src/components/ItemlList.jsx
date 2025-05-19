import { useState } from 'react';
import { initialItems } from './lib/constans';

export default function ItemlList() {
  const [items, setItems] = useState(initialItems);

  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li className="item">
      <label>
        <input checked={item.packed} type="checkbox" />
        {item.name}
      </label>
      <button>❌</button>
    </li>
  );
}
