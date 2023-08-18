'use-client'

import { convertToDecimal } from "src/helpers/numbers";
import styles from 'src/styles/list/list.module.css';


const List = ({ countriesList }) => {
  return (
    <div className={styles.list}>
      {countriesList?.map((country, idx) => (
        <div key={country.cioc} className={styles.list_item}>
          <img alt={`flag-${country.cioc}`} src={`${country?.flags?.png}`} />
          <div className={styles.list_item_description}>
            <p className={styles.list_item_name}>{country?.name?.common}</p>
            <p><strong>Population: </strong>{convertToDecimal(country?.population)}</p>
            <p><strong>Region: </strong>{country?.region}</p>
            <p><strong>Capital: </strong>{country?.capital?.[0]}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default List;