import PropTypes from 'prop-types';
import css from './Statistics.module.css'
import getRandomHexColor from 'randomHex';


export default function Statistics({title, stats}) {
    return <section className={css.statistics}>
        {title && (<h2 className={css.title}>{title}</h2>)}
                    

        <ul className={css.list}>
            {stats.map(stat => {
                return  <li style={{backgroundColor: getRandomHexColor()}} key={stat.id} className={css.item}>
                            <span className={css.label}>{stat.label}</span>
                            <span className={css.percentage}>{stat.percentage}%</span>
                        </li>

            })}
                    </ul>
                </section>
 }

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.exact({id: PropTypes.string.isRequired, label: PropTypes.string.isRequired, percentage: PropTypes.number.isRequired})).isRequired
 }