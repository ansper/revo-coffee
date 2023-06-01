import styles from './Header.module.scss'
import logo from "../../assets/img/header/revo_logo.png"
import intro from "../../assets/img/header/intro.jpg"
import Navbar from './navbar/Navbar'

const Header = () => {
  return (
    <header>
        <div className={styles.container}>
            <div className={styles.logo}>
                <a href="/"><img src={logo} alt="logo" /></a>
            </div>
            <div className={styles.intro__img}>
                <img src={intro} alt="intro" />
            </div>
            <Navbar />
        </div>
        <h1 className={styles.header__text}>
          YOUR <br/> <b>PERSONALIZED</b> <br/> COFFEE
        </h1>
    </header>
  )
}

export default Header