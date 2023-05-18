import { useState } from 'react';
import styles from "./Popup.module.css"
import { Link } from 'react-router-dom';

function Popup() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <>
      <button className={styles.etiqueta} onClick={toggleVisibility}>Explore Henry Market</button>
      {visible && (
        <div className={styles.contenedor}>
          <div className={styles.popupheader}>
          
           
          </div>
          <div className={styles.popupContent}>
            {/* <p>
          <Link to="/search" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>-Search</Link>
      </p> */}
          <p>
         {/* <Link to="/Notifications" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>Notifications</Link>*/}
         </p>
         <p>
         {/* <Link to="/Myshopping" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>My shopping</Link>*/}
         </p>
         
         <p>
         {/*<Link to="/discounts" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>Discounts</Link>*/} 
         </p>
         <p>
         {/*<Link to="/record" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>Record</Link>*/}
         </p>
         <p>
         <Link to="/account" className={styles.letraspoup} style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}> -Account</Link>
         </p>
         <p>
         <Link to='/category' className={styles.letraspoup} style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}> -Category</Link>
         </p>
         
         
        
          <button className={styles.input} onClick={toggleVisibility}>Close</button>
          
          </div>
        </div>
      )}
    </>
  );
}

export default Popup;

