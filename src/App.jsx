import { useState } from "react";

function App() {
  const [list, setList] = useState([
    {
      id: 1,
      item: "lol",
    },
  ]);

  return (
    <>
      <header>
        <h1>To-Do List</h1>
      </header>
      <Add />
      <List />
    </>
  );

  function Add() {
    const [aList, setNote] = useState("");

    function handleChange(e) {
      setNote(e.target.value);
    }

    function handleSubmit(e) {
      e.preventDefault();
      if (aList.trim() !== "") {
        const newList = {
          id: new Date().getTime(),
          item: aList,
        };

        setList([...list, newList]);
        setNote("");
      }
    }

    return (
      <form onSubmit={handleSubmit}>
        <input type="text" name="textList" placeholder="Add a list" value={aList} onChange={handleChange} />
        <button className="addBtn">Add</button>
      </form>
    );
  }

  function List() {
    return (
      <>
        {list.map(({ item, id }) => (
          <section className="list" key={id}>
            <p className="text">{item}</p>
            <button className="xBtn" onClick={() => handleDelete(id)}>
              X
            </button>
          </section>
        ))}
      </>
    );
  }

  function handleDelete(id) {
    const updateList = list.filter((list) => list.id !== id);
    setList(updateList);
  }
}

export default App;
