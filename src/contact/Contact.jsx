import React from 'react';
import styles from '../contact/contact.module.css';
import contact1 from '../assets/business-card-02.png';


const Contact = () => {
  return (
    <div className={styles.container}>
      <h2>
            For more information about the plans and prices please contact us via What´s App
      </h2>

      <div className={styles.box}>
         <img src={contact1} alt='business info'/>
         <a href='http://wa.me/17252448525?tex=Hi,%20I´ll%20reply%20as%20as%20possible%20Thanks ' alt='+1(725)244-8525'><p>+1(725)244-8525</p></a>
      </div>
    </div>
  )
}

export default Contact