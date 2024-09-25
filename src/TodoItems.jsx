import Item from './Item.jsx';

function TodoItems({ItemsArray, handleClickOnDelete}) {
    return (
        <>
            {ItemsArray.map((item, index)=> <Item itemText={item} key={index} onDelete={()=> handleClickOnDelete(index)}></Item>)}
        </>
      );
}

export default TodoItems;