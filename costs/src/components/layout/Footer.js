import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

import styles from './Footer.module.css'


function Footer() {
  return(
    <Footer className={styles.footer}>
    <ul className={styles.social_list}>  
      <li>
        <FaFabook/>
      </li>
      <li>
        <FaInstagram/>
      </li>
      <li>
        <FaLinkedin/>
      </li>
    </ul>
      <p className={styles.copy_right}>
      <span>Costs</span> &copy; 2022
      </p>
    </Footer>
  )
}

export default Footer