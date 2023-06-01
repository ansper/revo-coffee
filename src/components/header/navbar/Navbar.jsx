import styles from './Navbar.module.scss'
import shoppingCard from "../../../assets/img/header/shopping-cart.png"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.shoppingCard}>
            <img src={shoppingCard} alt="shoppingCard" />
            <div/>
        </div>
        <nav>
            <h2>HOME PAGE</h2>
            <ul>
                <li>
                    <a href="/">COFFEE</a>
                </li>
                <li>
                    <a href="/">COLOR FILTER</a>
                </li>
                <li>
                    <a href="/">COFFEE COMBO</a>
                </li>
                <li>
                    <a href="/">GIFTSET</a>
                </li>
                <li>
                    <a href="/">CONTACT</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar