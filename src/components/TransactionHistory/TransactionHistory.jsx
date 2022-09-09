import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'

export default function TransactionHistory({ items }) {
    return  <table className={css['transaction-history']}>
                <thead>
                    <tr >
                        <th className={css['head-list-item']}>Type</th>
                        <th className={css['head-list-item']}>Amount</th>
                        <th className={css['head-list-item']}>Currency</th>
                    </tr>
            </thead>
            <tbody>
            {items.map(item => {
                 return <tr key={item.id} className={css['list']} >
                            <td className={css["list-item"]}>{item.type}</td>
                            <td className={css["list-item"]}>{item.amount}</td>
                            <td className={css["list-item"]}>{item.currency}</td>
                        </tr>
             } )}
            </tbody>
            </table>
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
      id: PropTypes.string.isRequired, type: PropTypes.string.isRequired, amount: PropTypes.string.isRequired, currency: PropTypes.string.isRequired
    }).isRequired)
}