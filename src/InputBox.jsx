import Input from './Input.jsx'
import Button from './Button.jsx'
import { useState } from 'react';

function InputBox({handleAddItems}) {
    const [text, setText] = useState('');
    const [date, setDate] = useState('');

    const handleOnInputChange = (e) =>{
        if(e.target.type==='text'){
            setText(e.target.value);
        }else if(e.target.type==='date'){
            setDate(e.target.value);
        }
    }

    const handleOnclick = () => {
       if(date && text){
         handleAddItems(`${text}   -  ${date}`);
         setDate('');
         setText('');
       }
    }
    

    return ( 
        <div className='container d-flex justify-content-center align-items-center'>
            <Input inputType={"text"} value={text} onChange={handleOnInputChange}></Input>
            <Input inputType={"date"} value={date} onChange={handleOnInputChange}></Input>
            <Button BtnText={"ADD"} onClick={handleOnclick} btnColor={"btn-success"}></Button>
        </div>
    
     );
}

export default InputBox;