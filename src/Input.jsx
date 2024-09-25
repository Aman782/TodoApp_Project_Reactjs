import styles from './Input.module.css'


function Input({inputType, value, onChange}) {
    return ( 
        <>
            <input className={styles.input} type={inputType} value={value} onChange={onChange}></input>
        </>
     );
}

export default Input;