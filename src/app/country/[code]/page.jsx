import BackBtn from 'src/components/backBtn/BackBtn';
import { getCountryByCode } from 'src/services/countries';
import { parseDataRequest } from 'src/helpers/country';

import styles from 'src/styles/country/country.module.css';

const infoSection = {
  nativeName: 'Native Name',
  topLevelDomain: 'Top Level Domain',
  population: 'Population',
  currencies: "Currencies",
  region: 'Region',
  languages: 'Languages',
  capital: 'Capital'
}

const CountryPage = async ({ params }) => {
  const { code } = params;

  const [country] = await getCountryByCode(code);
  if (!country) return null;

  const countryData = await parseDataRequest(country);

  return (
    <div>
      <BackBtn />
      <div className={styles.details}>
        <div className={styles.flag}>
          <img alt={`flag-${country.cioc}`} src={country?.flags?.png} />
        </div>
        <div className={styles.info}>
          <p className={styles.name}>{countryData.name}</p>
          <div className={styles.info_section}>
            {Object
              .keys(infoSection)
              .map((key) => (
                <p key={`info-${key}`}>
                  <strong>{infoSection[key]}: </strong>{countryData[key]}
                </p>
              ))
            }
          </div>
          <div className={styles.border_countries_container}>
            <p><strong>Border Countries: </strong></p>
            <div className={styles.border_countries}>
              {countryData?.borderCountries?.length && countryData.borderCountries.map((country) => (
                <span>{country}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryPage;