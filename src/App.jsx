import { useState } from "react";
import InputBox from "./InputBox";
import TodoItems from "./TodoItems";

function App() {
  const [currentItem, setItem] = useState([]);

  const handleAddItems = (newItem) => {
    setItem([...currentItem, newItem]);
  };

  const handleClickOnDelete = (deleteIndex)=>{
    let updatedItems = currentItem.filter((item, index)=> index!=deleteIndex);
    setItem(updatedItems);
  }

  return (
    <>
      <center>
        <div className="container m-4 p-4">
          <InputBox handleAddItems={handleAddItems}></InputBox>
          <TodoItems ItemsArray={currentItem} handleClickOnDelete={handleClickOnDelete}></TodoItems>
        </div>
      </center>
    </>
  );
}

export default App;
