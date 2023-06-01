import styles from './Features.module.scss'
import FeaturesItem from './featuresItem/FeaturesItem'

const Features = () => {
    const features = [
        {
            title: 'Source',
            img: require('../../assets/img/features/source.png'),
            discription: 'Arabica and Robusta coffee beans meet international standards.'
        },
        {
            title: 'Quality',
            img: require('../../assets/img/features/quality.png'),
            discription: 'Each coffee bean is a highly concentrated process of coffee artisans.'
        },
        {
            title: 'Nuts',
            img: require('../../assets/img/features/nuts.png'),
            discription: '70% of the quality of a cup of coffee comes from the origin and quality of the green bean.'
        },
        {
            title: 'Bartending',
            img: require('../../assets/img/features/bartending.png'),
            discription: 'The coffee beans are molted through a thorough and rigorous roasting process.'
        }
        
    ]
    return (
        <div className={`_container ${styles.features}`}>
            <p className='subTitle'>Your Personalized Coffee</p>
            <h3>COFFEE BUILD YOUR BASE</h3>
            <div className={styles.item__container}>
                {features.map((item) => <FeaturesItem title={item.title} img={item.img} discription={item.discription}/>)}
            </div>
        </div>
    )
}

export default Features