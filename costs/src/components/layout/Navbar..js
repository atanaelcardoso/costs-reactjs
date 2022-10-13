import {Link} from 'react-router-dom'

import Container from './container'

import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'



function Navbar() {
  return(
    <nav className={styles.navbar}>
      <Container>  
        <Link to="/">
        <img src={logo} alt="Costs"/>
        </Link>
        <ul className={styles.list}>
         <li className={styles.item}>
           <Link to="/">Home</Link>
        </li>
          <li className={styles.item}>
           <Link to="/Projects">Projetos</Link>
          </li>
          <li className={styles.item}>
           <Link to="/Company">Contato</Link>
          </li>
          <li className={styles.item}>
           <Link to="/Contact">Empresa</Link>
          </li>
        </ul>
      </Container>
    </nav>
  )
}

export default Navbar