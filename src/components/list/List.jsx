import Flag from './Flag';
import { convertToDecimal } from "src/helpers/numbers";
import styles from 'src/styles/list/list.module.css';

const List = ({ countriesList }) => {
  return (
    <div className={styles.list}>
      {countriesList?.length
        ? countriesList.map((country, idx) => (
          <div key={country.cioc} className={styles.list_item}>
            {/* <img alt={`flag-${country.cioc}`} src={`${country?.flags?.png}`} /> */}
            <Flag
              alt={`flag-${country.cioc}`}
              src={country?.flags?.png}
              countryCode={country?.cioc}
            />
            <div className={styles.list_item_description}>
              <p className={styles.list_item_name}>{country?.name?.common}</p>
              <p><strong>Population: </strong>{convertToDecimal(country?.population)}</p>
              <p><strong>Region: </strong>{country?.region}</p>
              <p><strong>Capital: </strong>{country?.capital?.[0]}</p>
            </div>
          </div>
        
        )) : null
      }
    </div>
  )
}

export default List;