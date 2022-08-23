import { useState } from "react";

const List = () => {
  let items = [
    {
      id: 1,
      name: "Ronaldo",
    },
    {
      id: 2,
      name: "Joseph",
    },
    {
      id: 3,
      name: "Alex",
    },
  ];

  const [newItems, setNewItems] = useState(items);
  const handleNewDelete = (id) => {
    setNewItems(
      newItems.filter((item) => {
        return item.id !== id;
      })
    );
    console.log(newItems);
  };
  return (
    <div>
      {newItems.map((newItem) => (
        <>
          <p key={newItem.id}>
            {newItem.id} - {newItem.name}
          </p> 
          <button onClick={() => {handleNewDelete(newItem.id)}}>Excluir</button>
        </>
      ))}
    </div>
  );
};

export default List;
