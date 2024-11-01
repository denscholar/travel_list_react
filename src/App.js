import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Logo from "./components/Logo";
import ParkingList from "./components/ParkingList";
import Stats from "./components/Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all Items? "
    );
    if (confirmed) {
      setItems([]);
    }
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <ParkingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggle={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
