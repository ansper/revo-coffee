import styles from './FeaturesItem.module.scss'

const FeaturesItem = (props) => {
  return (
    <div className={styles.item}>
        <img src={props.img} alt="features"/>
        <h2>{props.title}</h2>
        <p>{props.discription}</p>
    </div>
  )
}

export default FeaturesItem