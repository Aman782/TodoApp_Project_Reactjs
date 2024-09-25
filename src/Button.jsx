import styles from './Button.module.css';

function Button({BtnText, onClick, btnColor}) {
    return ( 
        <>
            <button className={`${styles.btnCustom} btn ${btnColor}`} onClick={onClick}>{BtnText}</button>
        </>
     );
}

export default Button;