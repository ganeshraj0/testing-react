import Header from "./Header";
import "./App.css";
import Contant from "./Contant";
import { useState } from "react";
import Footer from "./Footer";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

function App() {
  const [item, setItem] = useState(
    JSON.parse(localStorage.getItem("todo_list"))
  );

  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  const addItem = (items) => {
    const id = item.length ? item[item.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, items };
    const listItem = [...item, addNewItem];
    setItem(listItem);
    localStorage.setItem("todo_list", JSON.stringify(listItem));
  };

  const handeling = (id) => {
    const listing = item.map((i) =>
      i.id === id ? { ...i, checked: !i.checked } : i
    );
    setItem(listing);
    localStorage.setItem("todo_list", JSON.stringify(listing));
  };
  const deletefun = (id) => {
    const deleteitem = item.filter((i) => i.id !== id);
    setItem(deleteitem);
    localStorage.setItem("todo_list", JSON.stringify(deleteitem));
  };

  const sumitItem = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };
  return (
    <div className="App">
      <Header />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        sumitItem={sumitItem}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Contant
        item={item.filter((items) =>
          items.items.toLowerCase().includes(search.toLowerCase())
        )}
        handeling={handeling}
        deletefun={deletefun}
      />
      <Footer length={item.length} />
    </div>
  );
}

export default App;
